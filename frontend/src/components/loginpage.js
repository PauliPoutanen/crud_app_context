import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {register, registerFailed, login} from '../actions/loginactions'


const LoginPage = (props) => {
    const [state, setState] = useState({
        username:"",
        password:""
    })

    const dispatch = useDispatch()


    const onChange = (event) => {
        setState((state)=> {
            return {
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }
    const onSubmit =(event) => {
        event.preventDefault()
        if(state.username.length < 4 || state.password.length<8) {
            dispatch(registerFailed("Username must be atleast 4 char long / password 8 char on more"))
            return
        }
        let user = {
            ...state
        }
        if (event.target.name === "register"){
            dispatch(register(user))        }
        else {
        dispatch(login(user))        }
    }
   return (
    <div style={{
        backgroundColor:"lightblue",
        width:"40%",
        margin:"auto",
        textAlign:"center"
    }}>
<form className="mb-5">
<label htmlFor="username" className="form-label">UserName</label>
<input type="text"
name="username"
id="username"
className="form-control"
onChange={onChange}
value={state.username}/>

<label htmlFor="password" className="form-label">PassWord</label>
<input type="password"
name="password"
id="password"
className="form-control"
onChange={onChange}
value={state.password}/>
<button name="register" onClick={onSubmit} className="btn btn-secondary">Register</button>
<button name="login" onClick={onSubmit} className="btn btn-secondary">Login</button>


</form>
</div>
   )
}
export default LoginPage