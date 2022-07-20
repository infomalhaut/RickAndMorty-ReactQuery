import { Characters } from "./components/Characters";
import {QueryClientProvider, QueryClient} from "react-query"

const queryClient = new QueryClient()

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <QueryClientProvider client={queryClient}>
      <Characters/>
      </QueryClientProvider>
      
    </div>

  );
}

export default App;
