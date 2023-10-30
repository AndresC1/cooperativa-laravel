import React from "react";

export function BoxTable({ title, children }) {
    return (
        <div className={"text-zinc-200 w-full flex justify-center items-center"}>
            <article className={"max-w-[40rem] w-full p-4"}>
                <h1 className={"uppercase font-bold text-2xl text-center mt-2"}>{title}</h1>
                {children}
            </article>
        </div>
    );
}
