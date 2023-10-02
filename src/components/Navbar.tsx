import { Link, useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function Navbar() {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <nav className="shadow-lg rounded-lg">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1>Brew Haven</h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {isConnected ? (
              <>
                <Link to="/" className="text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                  Beers
                </Link>

                <Link to="/random" className="text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                  Get Random Beer
                </Link>

                <Link to="/favorites" className="text-gray-900 rounded-md px-3 py-2 text-sm font-medium">
                  Favorites
                </Link>

                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                  onClick={() => {
                    disconnect();
                    navigate("/", { replace: true });
                  }}
                >
                  Disconnect
                </button>
              </>
            ) : (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                onClick={() => {
                  connect();
                  navigate("/", { replace: true });
                }}
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
