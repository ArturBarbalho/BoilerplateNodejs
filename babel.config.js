export const presets = [
    [
        '@babel/preset-env',
        {
            targets: {
                node: 'current'
            }
        }
    ],
    '@babel/preset-typescript'
];
export const plugins = [
    ['module-resolver', {
        alias: {
            '@config': './src/config',
            '@models': './src/models',
            '@controllers': './src/controllers',
            '@views': './src/views'
        }
    }]
];
export const ignore = [
    '**/*.spec.ts'
];