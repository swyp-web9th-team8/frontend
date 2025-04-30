"use client"

import { use } from "react";

interface Props {
    params: Promise<{ id: string }>
}

export default function GatheringDetail({ params }: Props) {
    const { id } = use(params);

    return (
        <div>
            <h1>GatheringDetail</h1>
            <h1>{id}</h1>
        </div>
    )
}