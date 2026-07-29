import AdminLayout from "../../Layouts/AdminLayout";
import PageLayout from "../../Components/Admin/Layout/PageLayout";

import DashboardHeader from "../../Components/Admin/Dashboard/DashboardHeader";
import DashboardStatsGrid from "../../Components/Admin/Dashboard/DashboardStatsGrid";
import DashboardQuickActions from "../../Components/Admin/Dashboard/DashboardQuickActions";
import DashboardTimeline from "../../Components/Admin/Dashboard/DashboardTimeline";
import DashboardDraftSummary from "../../Components/Admin/Dashboard/DashboardDraftSummary";
import DashboardFooter from "../../Components/Admin/Dashboard/DashboardFooter";

export default function Dashboard({
    stats,
    drafts,
    timeline,
}) {
    return (
        <AdminLayout>

            <PageLayout>

                <DashboardHeader />

                <DashboardStatsGrid stats={stats} />

                <div className="mt-10 grid gap-8 xl:grid-cols-3">

                    <div>
                        <DashboardQuickActions />
                    </div>

                    <div className="xl:col-span-2">
                        <DashboardTimeline timeline={timeline} />
                    </div>

                </div>

                <div className="mt-8">

                    <DashboardDraftSummary drafts={drafts} />

                </div>

                <DashboardFooter />

            </PageLayout>

        </AdminLayout>
    );
}