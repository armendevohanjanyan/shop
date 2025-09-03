"use client";

export default function ProductsError({ error }: { error: Error }) {
    return (
        <div className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Failed to load products</h2>
            <p className="text-gray-500">{error.message}</p>
        </div>
    );
}