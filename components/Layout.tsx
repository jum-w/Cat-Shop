import Navbar from './Navbar'

export default function Layout({ children }: any) {
    return (
        <>
            <Navbar /> <div> {children} </div>
        </>
    )
}