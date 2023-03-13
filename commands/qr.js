const { SlashCommandBuilder} = require("discord.js");
const QRCode = require('qrcode')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('qr')
        .setDescription('generates a qr code for the provided text')
        .addStringOption(option =>
            option
            // I took this bit form ceifeirocv (Jair Almeida Oliveira) 
                .setName('text_to_qr')
                .setDescription('The string to turn to QR')
                .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString('text_to_qr')
        const encodedText = encodeURIComponent(text)
        await interaction.reply(`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodedText}`)
    }
}