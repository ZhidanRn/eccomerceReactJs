import { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginPages() {
    const [users, setUsers] = useState()
    const [password, setPassword] = useState()

    const onChangeUser = (e) => {
        setUsers(e.target.value)
    }

    const onChangePass = (e) => {
        setPassword(e.target.value)
    }
    
    const onClickLogin = () => {
        const dataUsers = localStorage.getItem('users')
        const dataParsed = JSON.parse(dataUsers)
        const user = dataParsed.find(user => user.username === users)

        if (user && user.password === password) {
            alert(`Login Seccesful`)
            window.location.href = '/'
        } else {
            alert('Login Failed, Make sure your username and password correct')
        }
    }
    return (
        <>
        <div className="mx-w-md mx-auto min-h-screen flex items-center justify-center">
            <div className=" sm:rounded-3xl sm:shadow-lg  ">

                <div className="sm:w-[456px] sm:h-[80%]">
                    <div className="mx-w-md mx-auto p-12">  
            
                        <form>
                            <div className="px-4 pb-2 text-xs">Username</div>
                            <input type="text" id="loginUser" placeholder="Enter Username" className="bg-gray-100 w-full border rounded py-2 px-4 text-sm" value={users} onChange={onChangeUser} required />

                            <div className=" px-4 pt-4 pb-2 text-xs">Password</div>
                            <input type="password" id="loginPass" placeholder="Enter Password" className="bg-gray-100 w-full border rounded py-2 px-4 text-sm" value={password} onChange={onChangePass} required />

                            <div className="text-right text-xs text-blue-600 pt-3 pb-10"><a href="#">Forgot Password?</a></div>
                            <button type="button" className="border w-full bg-[#8053FF] rounded-lg py-2 cursor-pointer text-slate-100 font-medium" onClick={onClickLogin}>Sign In</button>


                                <p className="text-center text-xs mt-12">Dont have an account? <Link to={'../register'} className="text-blue-600 tracking-wider">Sign up now</Link></p>

                        </form>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}