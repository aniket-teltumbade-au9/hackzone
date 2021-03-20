const spawnSync = require('child_process').spawnSync;

exports.pyScript = (language, scriptPath, inputs) => {
  var result = {}
  const scriptExecution = spawnSync(language, [scriptPath], { input: inputs });
  let err = scriptExecution.stderr.toString()
  let msg = scriptExecution.stdout.toString().trim()

  if (err != '') result = { ...result, error: err }
  if (msg != '') result = { ...result, message: msg }
  return result
}

exports.jsScript = (language, scriptPath, inputs) => {
  var result = {}
  console.log(language, scriptPath, inputs)
  const scriptExecution = spawnSync(language, [scriptPath], { input: inputs });
  let err = scriptExecution.stderr.toString()
  let msg = scriptExecution.stdout.toString()
  let ans = msg
  console.log(ans,err)
  if (err != '') result = { ...result, error: err }
  if (msg != '') result = { ...result, message: `${ans}` }
  return result
}