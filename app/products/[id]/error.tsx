"use client";

export default function ProductError({ error }: { error: Error }) {
    return (
        <div className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Failed to load product</h2>
            <p className="text-gray-500">{error.message}</p>
        </div>
    );
}