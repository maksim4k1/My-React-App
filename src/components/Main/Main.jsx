import Aside from './Aside/Aside';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import style from './Main.module.css';
import { Route } from 'react-router-dom';
import Index from './Index/Index';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function Main(props){
    // Return XML
    return (
        <main className={style.main + " container"}>
            <Aside sidebar={props.state.sidebar} />
            <div className={style.content}>
                <Route exact path="/" render={ () => <Index/> }/>
                <Route path="/dialogs" render={ () => <Dialogs dialogs={props.state.dialogsPage} dispatch={props.dispatch}/> }/>
                <Route path="/profile" render={ () => <Profile profile={props.state.profilePage} dispatch={props.dispatch}/> }/>
                <Route path="/signin" render={ () => <SignIn signIn={props.state.signInPage} dispatch={props.dispatch}/> }/>
                <Route path="/signup" render={ () => <SignUp signUp={props.state.signUpPage} dispatch={props.dispatch}/> }/>
            </div>
        </main>
    );
}

export default Main;