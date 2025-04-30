"use client"

interface Props {
    params: {
        id: string[];
    }
}

export default function GatheringDetail({ params }: Props) {
    return (
        <div>
            <h1>GatheringDetail</h1>
            <h1>{params.id}</h1>
        </div>
    )
}