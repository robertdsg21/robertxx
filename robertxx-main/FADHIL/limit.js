const limitend = (pushname2) => {
        return`*maaf ${pushname2} O limite de hoje expirou*\n*o limite é zerado toda vez 12:00*`
}

const limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT  」*
sisa limit anda : ${limitCounts}

NOTE : Se terminar, você pode usá-lo novamente amanhã`
}
exports.limitend = limitend
exports.limitcount = limitcount
