import Breadcrumb from "./Breadcrumb";

export default function PageLayout({
     title,
    description,
    actions,
    breadcrumb = [],
    children,
}) {
    return (
        <div className="space-y-8">

            <div className="flex flex-col gap-6 rounded-3xl bg-white p-8 shadow-sm border border-slate-200 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    {breadcrumb.length > 0 && (
                    <Breadcrumb items={breadcrumb} />
                    )}

                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-2 max-w-2xl text-slate-500">
                            {description}
                        </p>
                    )}

                </div>

                {actions && (
                    <div className="flex shrink-0">
                        {actions}
                    </div>
                )}

            </div>

            <div className="space-y-6">
                {children}
            </div>

        </div>
    );
}