function Header(props) {
    return (
        <div className="flex flex-row justify-between p-4 items-center">
            <h1 className="ml-16 font-bold font-mono text-3xl">MomentsWithJoy</h1>
            <div className="flex float-right gap-4 mr-16"> <h2>About</h2>
                <h2>Contact</h2>
                <h2>Blog</h2>
                <h2>Book A Session</h2>
                <button>Listen To Joy</button></div>
        </div>
    )
}

export default Header