export default function Loading() {
    return (
        <div className="fixed inset-0 bg-mainBlue flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-babyBlue border-t-white rounded-full animate-spin"></div>
                <p className="text-xl text-white font-bold uppercase">Loading...</p>
            </div>
        </div>
    );
}