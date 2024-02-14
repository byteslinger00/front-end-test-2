import Analytics from "./analytics";
import Transactions from "./transactions";
import styles from '@/styles/Dashboard/Dashboard.module.css'

export default function WalletInfo() {
  return (
    <div className={`flex-row gap ${styles.walletinfo}`}>
      <Transactions />
      <Analytics />
    </div>
  );
}
