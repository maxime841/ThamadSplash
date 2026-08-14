import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import DateField from "./DateField";
import TimeField from "./TimeField";

export default function PartyInformations({
    data,
    setData,
    errors,
}) {
    return (
        <>
            <InputField
                label="Titre"
                name="title"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                error={errors.title}
                required
            />

            <InputField
                label="Sous-titre"
                name="subtitle"
                value={data.subtitle}
                onChange={(e) => setData("subtitle", e.target.value)}
                error={errors.subtitle}
            />

            <TextAreaField
                label="Description"
                name="description"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
                required
            />

            <div className="grid md:grid-cols-2 gap-6">

                <DateField
                    label="Date"
                    name="event_date"
                    value={data.event_date}
                    onChange={(e) => setData("event_date", e.target.value)}
                    error={errors.event_date}
                />

                <TimeField
                    label="Heure"
                    name="event_time"
                    value={data.event_time}
                    onChange={(e) => setData("event_time", e.target.value)}
                    error={errors.event_time}
                />

            </div>

            <InputField
                label="DJ"
                name="dj"
                value={data.dj}
                onChange={(e) => setData("dj", e.target.value)}
                error={errors.dj}
            />
        </>
    );
}
