import React from 'react'
import { Well, PageHeader, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-bootstrap'

export default (props) =>

    <div>
        <Well>
        <PageHeader>Wybierzesz najlepsze produkty<br />
            <small> Nie ruszając się z domu. Nigdy nie było to takie proste.</small></PageHeader>
                <samp>
        Nasza aplikacja to obsługa ułatwienia dostepu, która pomaga użytkownikom korzystac w sposób wygodny i prosty
        na tworzenie listy zakupowej na podstawie preferencji użytkownika.
            <br /><br />
        Dodaje ona możliwość prezentowania informacji o sklepach i produktach oraz o lokalizowaniu ich w oparciu o mapy.

            <br /><br />
                    <h3>Główne cechy aplikacji :</h3><br />
                    <div className="alert alert-success" role="alert">
                     - dynamika,<br />
                     - prostota,<br />
                    - lokalizacja sklepów w oparciu o bieżące położenie użytkownika,<br />
                        - tworzenie listy produktow i sklepow.<br />
                </div>
                </samp>
        </Well>
    </div>
