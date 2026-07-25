import { useForm } from "@inertiajs/react";
import { route } from "../../../lib/route";
import { useState } from "react";

import PartyInformations from "./PartyInformations";
import PartyMedia from "./PartyMedia";
import PartyPublication from "./PartyPublication";

export default function PartyForm({ party = null }) {

    const { data, setData, post, put, processing, errors } = useForm({
        title: party?.title || "",
        subtitle: party?.subtitle || "",
        description: party?.description || "",
        event_date: party?.event_date || "",
        event_time: party?.event_time || "",
        dj: party?.dj || "",
        cover_image: null,
        published: party?.published ?? false,
    });

    const [preview, setPreview] = useState(
    party?.cover_image ? `/storage/${party.cover_image}` : null
);

    function submit(e) {
        e.preventDefault();

        if (party) {
            put(route("admin.parties.update", party.id));
        } else {
            post(route("admin.parties.store"));
        }
    }

    return (
        <form
            onSubmit={submit}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >

        <div className="lg:col-span-2 space-y-8">

    <PartyInformations
        data={data}
        setData={setData}
        errors={errors}
    />

    <PartyMedia
        preview={preview}
        setPreview={setPreview}
        setData={setData}
        errors={errors}
    />

</div>

<div>

    <PartyPublication
        data={data}
        setData={setData}
        processing={processing}
        party={party}
    />

</div>

        </form>
    );
}