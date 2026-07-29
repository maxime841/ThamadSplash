import { useForm } from "@inertiajs/react";

import TextInput from "../Input/TextInput";
import SelectInput from "../Input/SelectInput";
import PrimaryButton from "../Button/PrimaryButton";

export default function UserForm({
    user = null,
    submitLabel = "Enregistrer",
    onSubmit,
}) {
    const { data, setData, processing, errors } = useForm({
        name: user?.name ?? "",
        email: user?.email ?? "",
        password: "",
        password_confirmation: "",
        role: user?.role ?? "admin",
    });

    const submit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={submit} className="space-y-6">

            <TextInput
                label="Nom"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
            />

            <TextInput
                label="Email"
                type="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
            />

            <TextInput
                label="Mot de passe"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                error={errors.password}
            />

            <TextInput
                label="Confirmation"
                type="password"
                value={data.password_confirmation}
                onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                }
                error={errors.password_confirmation}
            />

            <SelectInput
                label="Rôle"
                value={data.role}
                onChange={(e) => setData("role", e.target.value)}
                options={[
                    { value: "admin", label: "Administrateur" },
                    { value: "super-admin", label: "Super administrateur" },
                ]}
                error={errors.role}
            />

            <PrimaryButton
                type="submit"
                disabled={processing}
            >
                {submitLabel}
            </PrimaryButton>

        </form>
    );
}