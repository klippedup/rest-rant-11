const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page Not Found</h1>
                <p>Oops, sorry, we can not find this page! Try again!</p>
            </main>
        </Def>
    )
}

module.exports = error404