const Rx = require('@reactivex/rxjs')
const {RxHttpRequest} = require('rx-http-request')
const cheerio = require('cheerio')

const {interval, url, cssSelector, mode, findOnce} = require('./config.js')

const match$ = Rx.Observable.interval(interval)
  .startWith(0)
  .do(() => console.log('checking'))
  .flatMap(_ => RxHttpRequest.get(url).retry(3).catch(error => {error}))
  .filter(data => !data.error)
  .pluck('body')
  .map(body => cheerio.load(body))
  .map($ => $(cssSelector))
  .filter(match => match.length)
  .let(o => findOnce ? o.first() : o)

require(`./${mode}`)(match$);
