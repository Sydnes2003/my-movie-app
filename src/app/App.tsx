import {AppRouter} from "./providers/AppRouter";
import {AppShell} from "@mantine/core";

const App = () => {
    return (
        <AppShell className="app">
            <AppRouter/>
        </AppShell>
    );
};

export default App;
