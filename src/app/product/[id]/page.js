import Link from "next/link"

export default function Product({params}) {

    return (
    <Link href="/"> 
        Estou visualisando o produto de numero: {params.id}
    </Link>
    )
}