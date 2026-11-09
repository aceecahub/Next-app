const isLoggedIn = true;
const hasNotifications = false;

export default function ConditionalPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      {isLoggedIn ? (
        <p className="text-green-600">Welcome back, user!</p>
      ) : (
        <p className="text-red-600">Please log in to continue.</p>
      )}
      {hasNotifications && (
        <p className="text-blue-600">You have new notifications!</p>
      )}
    </div>
  );
}
