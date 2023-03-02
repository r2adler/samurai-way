import React from 'react';
import '../../samurai-way/src/App.css';
import { Route } from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


function App({ state, addPost }: any) {

    return (
        <div className={'app-wrapper'}>
            <Header />
            <Navbar />
            <div className={'app-wrapper-content'}>
                <Route path="/dialogs" component={() =>
                    <Dialogs
                        messages={state.dialogsPage.messages}
                        dialogs={state.dialogsPage.dialogs}
                    />}
                />
                <Route path="/profile" component={() => <Profile posts={state.profilePage.posts} addPost={addPost}/>} />
                <Route path="/news" component={Profile} />
                <Route path="/music" component={Profile} />
                <Route path="/settings" component={Profile} />
            </div>
        </div>
    );
}

export default App;
