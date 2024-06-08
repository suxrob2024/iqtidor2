import './Sign.css'
function Sign() {

    return(
        <>
           <div className="wrapper">
                <button className="iclosed">
                <ion-icon name="close-outline"></ion-icon>
                </button>
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me all</label>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <button type="submit" className="btn1">Login</button>
                        <div className="login-register">
                            <p>
                                Don`t have an account?<a href="#" className="register-link">Sign in</a>
                            </p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <h2>Sign in</h2>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span>
                            <input type="text" required />
                            <label>User name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label ><input type="checkbox" />I agree to the terms &conditions</label>
                        </div>
                        <button type="submit" className="btn1">Sign in</button>
                        <div className="login-register">
                            <p>Already have an account?<a href="#" className="login-link">Login</a>
                            </p>
                            <p>New account <a href="https://accounts.google.com/lifecycle/steps/signup/name?continue=http://support.google.com/accounts/answer/27441?hl%3Den&ddm=0&dsh=S-620751671:1712308650521737&ec=GAZAdQ&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en&ifkv=ARZ0qKL21FL7BPRDcKPdVslZ94rBel2bftvAkTbcC2PP2xB0LwpCNOtFEfD5UEI1FqV8TGjA3eZQrA&theme=mn&TL=AEzbmxzCJ7O3cP6cIjcfNjMN0e4T1SlW8JJcefAqiRa-0e-uenAlR4_p7uAvCC83">Create_</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Sign;