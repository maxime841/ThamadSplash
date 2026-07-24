export default function PageLayout({
    title,
    description,
    actions,
    children,
}) {
    return (
        <div className="space-y-8">

            <div className="flex items-start justify-between">

                <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        {title}
                    </h1>

                    {description && (
                        <p className="mt-2 text-gray-600">
                            {description}
                        </p>
                    )}

                </div>

                {actions && (
                    <div>
                        {actions}
                    </div>
                )}

            </div>

            <div>
                {children}
            </div>

        </div>
    );
}