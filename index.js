var net = require('net')

var client = new net.Socket()
client.connect(30002, '192.168.1.106', function () {
  console.log('CONNECTED')
  client.write('def testprogram():' + '\n' +
    'servoj(get_inverse_kin(p[-0.400,-0.10915,0.1545,2.221,2.2215,0]),t=4)' + '\n' +
    'servoj(get_inverse_kin(p[-0.410,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.420,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.430,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.440,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.450,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.460,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.470,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.480,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.490,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.500,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.510,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.520,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.530,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.540,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.550,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.560,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.570,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.580,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.590,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.600,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.610,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.620,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.630,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.640,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.650,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.660,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.670,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.680,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.690,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.700,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.710,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.720,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.730,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.740,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.750,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.760,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.770,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.780,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.790,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
    'servoj(get_inverse_kin(p[-0.800,-0.10915,0.1545,2.221,2.2215,0]),t=0.1)' + '\n' +
  'end' + '\n')
  console.log('DATA SENT')
})

client.on('data', function (data) {
  console.log('DATA RECEIVED:')
  console.log(data)
  client.destroy()
})

client.on('close', function () {
  console.log('CONNECTION CLOSED')
})
