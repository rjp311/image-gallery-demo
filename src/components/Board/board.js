'use client'

import Image from 'next/image'
import Link from 'next/link'

import styles from './board.module.scss'

export const Board = ({data}) => {

    //Loop through data and render image
    return (
        <div className={styles.board}>
            { data ? data.map((image, i) => {
                return (
                    <Link key={i} className={styles.image} href={image.url} target="_blank">
                        <Image
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            alt={image.id}
                        ></Image>
                    </Link>
                )
            }) : <></>}
        </div>
    )
}