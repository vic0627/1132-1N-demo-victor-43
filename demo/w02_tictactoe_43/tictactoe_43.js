const o = 'o'
const x = 'x'
const tie = 'tie'
const ALL_STATES = [o, x, tie]
let turn = 0
let done = false

const $ = (e) => document.querySelector(e)
const $$ = (e) => document.querySelectorAll(e)
const l = console.log

const container = $('.container')
const alert = $('.alert')
const allLi = $$('.board li')
const resetBtn = $('.reset')

const ggMessage = (p) => {
  if (!ALL_STATES.includes(p)) return
  const addClass = (e) => e.classList.add(p)
  p === tie || addClass(container)
  addClass(alert)
  alert.textContent = p === tie ? tie : `player ${p} wins`
}

ggMessage(o)

const reset = () => {
  const removeClass = (e) => e.classList.remove(...ALL_STATES)
  removeClass(container)
  removeClass(alert)
  alert.textContent = ''
  allLi.forEach((node) => {
    removeClass(node)
    node.textContent = '+'
  })
}

resetBtn.addEventListener('click', reset)
