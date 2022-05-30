import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'

describe('App component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        const root = createRoot(container)
        root.render(<Header />)
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
    })

    it('Renders correctly component Header', () => {
        const header = document.querySelector('headerr')
        expect(header).toBeInTheDocument
    })
})
