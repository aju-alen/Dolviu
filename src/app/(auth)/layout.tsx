type LayoutProps ={
    children: React.ReactNode
}

 const authLayout = ({children}: LayoutProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {children}
        </div>
    )
}

export default authLayout