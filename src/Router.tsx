import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/post">
                    <Route path=":postId" element={<Posts />} />
                </Route>
            </Route>
        </Routes>
    )
}