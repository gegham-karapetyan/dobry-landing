function el(tag, className = '', props = null, children = '') {
    //debugger
    let elem = document.createElement(tag)
    if (className) elem.classList.add(...className.split(' '))
    if (props) Object.assign(elem, props);


    if (Array.isArray(children) && children.length) {
        children.forEach(child => {
            elem.appendChild(child)
        })
    } else if (children) { elem.appendChild(children) }
    return elem


}



function createFeedback(fruitName) {

    return el('div', `feedback feedback-${fruitName}`, null, [

        el('div', 'feedback__page feedback__page-first', null, [
            el('div', 'container', null, [
                el('div', 'feedback__text', null, [
                    el('a', '', { href: '#' },
                        el('img', '', { src: "images/feedback2.png", alt: "feddback-text" })
                    )
                ]),
                el('form', 'feedback__form', { action: "action", method: "post" }, [
                    el('div', 'feedback__block', null, [
                        el('label', '', { for: "uname", innerText: 'Անուն Ազգանուն*' }),
                        el('div', 'feedback__uname', null, [
                            el('input', '', { type: "text", name: "uname", required: true })
                        ])
                    ]),
                    el('div', 'feedback__block', null, [
                        el('label', '', { for: "mail", innerText: 'էլ․ հասցե*' }),
                        el('div', 'feedback__mail', null, [
                            el('input', '', { type: "mail", name: "mail", required: true })
                        ])
                    ]),
                    el('div', 'feedback__block', null, [
                        el('div', 'feedback__submit', null, el('img', '', { src: 'images/next-btn-bg.png' }))
                    ])
                ]),
                el('div', 'contacts', null, [
                    el('div', 'social', null, [
                        el('a', '', { href: "https://facebook.com" }, el('img', '', { src: 'images/facebook-icon.png', alt: "facebook-icon" })),
                        el('a', '', { href: "https://youtube.com" }, el('img', '', { src: 'images/youtube-icon.png', alt: "youtube-icon" })),
                        el('a', '', { href: "https://instagram.com" }, el('img', '', { src: 'images/instagram-icon.png', alt: "instagram-icon" }))
                    ]),
                    el('div', '', null, [
                        el('a', '', { href: 'mailto:https://mail@dobry.am', innerText: 'mail@dobry.am' }),
                        el('br'),
                        el('a', '', { href: 'tel:+374 00 00 00 00', innerText: '+374 00 00 00 00' })
                    ])
                ])

            ]),
            el('div', 'feedback__border', null, el('img', '', { src: "images/header-border.svg", alt: "border" })),
            el('div', 'copyright', null, el('div', 'container', null, el('p', '', { innerText: 'Copyright © 2020 dobry.am\nAll Rights Reserved.' })))
        ]),





        

    ]);



}
