export type PageTitleProps = {
    title : string;
}

export const PageTitle = (props:PageTitleProps) => {
    return (
        <>
            <header className="font-serif md:text-6xl lg:text-5xl text-4xl font-bold my-4 py-5 bg-gradient-to-r dark:from-[#231F31] from-white dark:via-[#000000] via-gray-400 via-50% dark:to-[#231F31] to-white to-100%">
                <h1 className="text-center">{props.title}</h1>
            </header>
        </>
    )
}