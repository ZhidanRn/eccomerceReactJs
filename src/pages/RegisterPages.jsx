import { useState } from "react"
import { Link } from "react-router-dom"

export default function RegisterPages(){
    const [users, setUsers] = useState()
    const [password, setPasword] = useState()
    const [confirm, setConfirm] = useState()

    const onChangeUser = (e) => {
        setUsers(e.target.value)
    }

    const onChangePass = (e) => {
        setPasword(e.target.value)
    }

    const onChangeConfirm = (e) => {
        setConfirm(e.target.value)
    }

    const onCLickRegister = () => {
        const data = JSON.parse(localStorage.getItem('users')) || [];

        if(data.some(user => user.username === users)){
            alert('Username is already registered. Choose another username')
            return
        } else if(password != confirm){
            alert('Password do not match')
        }

        data.push({ username: users, password: password})
        localStorage.setItem('users', JSON.stringify(data))
        alert('Registration Seccesfull, Please Login')
        window.location.href = 'login'
    }
    return(
        <>
        <div className="mx-w-md mx-auto min-h-screen flex items-center justify-center">
            <div className=" sm:rounded-3xl sm:shadow-lg  ">

                <div className="sm:w-[456px] sm:h-[80%]">
                    <div className="mx-w-md mx-auto p-12">  
            
                        <form>
                            <div className="px-4 pb-2 text-xs">Username</div>
                            <input type="text" id="regUser" placeholder="Enter Username" className="bg-gray-100 w-full border rounded py-2 px-4 text-sm" value={users} onChange={onChangeUser} required />

                            <div className="px-4 pt-4 pb-2 text-xs">Password</div>
                            <input type="password" id="regPass" placeholder="Enter Password" className="lg:mt-0 bg-gray-100 w-full border rounded py-2 px-4 text-sm" value={password} onChange={onChangePass} required/>

                            <div className="px-4 pt-4 pb-2 text-xs">Confirm Password</div>
                            <input type="password" id="regConf" placeholder="Confirm Password" className="lg:mt-0 bg-gray-100 w-full border rounded py-2 px-4 text-sm" value={confirm} onChange={onChangeConfirm} required />

                            <button type="button" onclick="register()" className="border w-full bg-[#8053FF] rounded-lg py-2 cursor-pointer text-slate-100 font-medium mt-4" onClick={onCLickRegister}>Sign up</button>


                                <p className="text-center text-xs mt-12">Already have an account? <Link to={'../login'} className="text-blue-600 tracking-wider">Sign in now</Link></p>

                        </form>
                    </div>
                </div>  
            </div>

        </div>
        </>
    )
}