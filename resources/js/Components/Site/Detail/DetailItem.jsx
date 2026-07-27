export default function DetailItem({

    label,

    value,

}) {

    return (

        <div className="flex justify-between border-b py-4">

            <span className="font-medium text-slate-500">

                {label}

            </span>

            <span className="font-semibold text-slate-900">

                {value}

            </span>

        </div>

    );

}