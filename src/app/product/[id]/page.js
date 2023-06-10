'use client'

import Link from "next/link"
import { useSearchParams } from 'next/navigation';

export default function Product({params}) {
    const searchParams = useSearchParams()

    const search = searchParams.get('vai')
    return (
    <Link href="/"> 
        Estou visualisando  o produto de numero: {params.id} nessa {search}
    </Link>
    )
}