import { Summary } from "../Summary";
import { TransactionsTable } from "../TansactionsTable";

import { Conteiner } from "../Dashboard/styles";

export function Dashboard () {
    return (
        <Conteiner>
            <Summary />
            <TransactionsTable />
        </Conteiner>
    );
}