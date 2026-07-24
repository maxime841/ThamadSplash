<?php

namespace App\Services;

use App\Models\Media;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class MediaService
{
    /**
     * Upload d'un média.
     */
    public function upload(
        UploadedFile $file,
        Model $model,
        bool $isCover = false
    ): Media {

        $path = $file->store('media', 'public');

        return $model->media()->create([
            'path' => $path,
            'alt' => pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME),
            'sort_order' => $model->media()->count(),
            'is_cover' => $isCover,
        ]);
    }

    /**
     * Supprimer un média.
     */
    public function delete(Media $media): void
    {
        Storage::disk('public')->delete($media->path);

        $media->delete();
    }

    /**
     * Définir l'image de couverture.
     */
    public function setCover(Media $media): void
    {
        $media->mediable
            ->media()
            ->update([
                'is_cover' => false,
            ]);

        $media->update([
            'is_cover' => true,
        ]);
    }

    /**
     * Réorganiser les images.
     */
    public function reorder(array $items): void
    {
        foreach ($items as $index => $id) {

            Media::where('id', $id)
                ->update([
                    'sort_order' => $index,
                ]);
        }
    }
}