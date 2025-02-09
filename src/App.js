
import { useWeb3React } from '@web3-react/core';
import { injected } from './Wallet/Connector';

function App() {

  const { activate, account, deactivate, active, chainId } = useWeb3React()

  const connectMetamask = async () => {
    try {
      await activate(injected)
    } catch (error) {

    }
  }
  const disconnectMetamask = async () => {
    try {
      await deactivate()
    } catch (error) {

    }
  }

  return (
    <div className="App">
      {active ? 'connected' : "not connected"}

      {active ?
        <button className="disconnectwallet" onClick={disconnectMetamask}>Disconnect Wallet</button>

        :
        <button className="connectwallet" onClick={connectMetamask}>Connect Wallet</button>
      }

      {active &&
        <>
          <span className='account'>{account}</span>
          <span className='chainid'>{chainId}</span>

        </>
      }


    </div>
  );
}

export default App;
