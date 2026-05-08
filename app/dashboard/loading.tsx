export default function DashboardLoading() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
      </div>

      <div className="dashboard-stats">
        <div className="skeleton skeleton-stat" />
      </div>

      <div className="dashboard-table-wrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton skeleton-row" />
        ))}
      </div>
    </div>
  );
}