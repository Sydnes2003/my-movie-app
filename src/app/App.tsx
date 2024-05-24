import {AppRouter} from "./providers/AppRouter";
import {AppShell} from "@mantine/core";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    return (
        <AppShell className="app">
            <Sidebar visibleFrom="md"/>
            <AppRouter/>
        </AppShell>
    );
};

export default App;
