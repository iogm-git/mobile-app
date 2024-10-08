import { APP_BASE_URL } from '@env'
import { Alert, PermissionsAndroid, Platform } from 'react-native';

export const _getDateNow = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}-${month}-${year} at ${hours}.${minutes}`;
};

export const _convertDateFormat = (inputDate) => {
    const parts = inputDate.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
}

export const _requestStoragePermission = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Izin Penyimpanan Diperlukan',
                message: 'Aplikasi ini memerlukan akses penyimpanan untuk mengunduh file.',
                buttonNeutral: 'Tanya Nanti',
                buttonNegative: 'Batal',
                buttonPositive: 'OK',
            }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Izin ditolak');
            throw new Error('Storage permission denied');
        }
    }
};

export const _getImage = (name) => {
    if (name) {
        if (name.includes('https')) {
            return name;
        } else {
            return `${APP_BASE_URL}/storage/images/${name}`;
        }
    }
    return '';
}

export const _getPageFromUrl = (url) => {
    if (!url) return null;

    const queryString = url.split('?')[1];

    const queryParams = queryString.split('&');

    const pageParam = queryParams.find(param => param.startsWith('page='));

    if (pageParam) {
        return pageParam.split('=')[1];
    } else {
        return null;
    }
}

export const _getFromData = (keyword, data) => {
    for (let i = 0; i < data.length; i++) {
        const obj = data[i];
        if (keyword in obj) {
            return obj[keyword];
        }
    }
    return null;
}

export const _formatCurrency = (amount) => {
    const parts = parseFloat(amount).toFixed(2).toString().split('.');

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return `Rp. ${parts.join('.')}`;
}

export const _searchData = (keyword, data, callback) => {
    const result = []
    data.forEach((value) => {
        if (Object.keys(value)[0].toLowerCase().includes(keyword) || Object.values(value)[0].toLowerCase().includes(keyword)) {
            result.push(value);
        }
    })

    callback(result)
}


export const _dataBanks = [
    { "aceh": "PT. BANK ACEH" },
    { "aceh_syar": "PT. BPD ISTIMEWA ACEH SYARIAH" },
    { "agris": "PT. BANK AGRIS" },
    { "agroniaga": "PT. BANK RAKYAT INDONESIA AGRONIAGA TBK." },
    { "allo": "PT. ALLO BANK INDONESIA TBK." },
    { "amar": "PT. BANK AMAR INDONESIA" },
    { "andara": "PT. BANK ANDARA" },
    { "anglomas": "PT. ANGLOMAS INTERNATIONAL BANK" },
    { "antar_daerah": "PT. BANK ANTAR DAERAH" },
    { "anz": "PT. BANK ANZ INDONESIA" },
    { "artajasa": "PT. ARTAJASA" },
    { "artha": "PT. BANK ARTHA GRAHA INTERNASIONAL TBK." },
    { "bali": "PT. BANK PEMBANGUNAN DAERAH BALI" },
    { "bangkok": "BANGKOK BANK PUBLIC CO.LTD" },
    { "banten": "PT. BANK BANTEN" },
    { "barclays": "PT BANK BARCLAYS INDONESIA" },
    { "bca": "PT. BANK CENTRAL ASIA TBK." },
    { "bcad": "PT. BANK DIGITAL BCA" },
    { "bca_syar": "PT. BANK BCA SYARIAH" },
    { "bengkulu": "PT. BPD BENGKULU" },
    { "bisnis": "PT. BANK BISNIS INTERNASIONAL" },
    { "bjb": "PT. BANK PEMBANGUNAN DAERAH JABAR DAN BANTEN" },
    { "bjb_syar": "PT. BANK JABAR BANTEN SYARIAH" },
    { "bni": "PT. BANK NEGARA INDONESIA (PERSERO)" },
    { "bnp": "PT. BANK NUSANTARA PARAHYANGAN" },
    { "bnp_paribas": "PT. BANK BNP PARIBAS INDONESIA" },
    { "boa": "BANK OF AMERICA NA" },
    { "bri": "PT. BANK RAKYAT INDONESIA (PERSERO)" },
    { "bsi": "PT. BANK SYARIAH INDONESIA TBK." },
    { "btn": "PT. BANK TABUNGAN NEGARA (PERSERO)" },
    { "btn_syar": "PT. BANK TABUNGAN NEGARA (PERSERO) UNIT USAHA SYARIAH" },
    { "btpn": "PT. BANK BTPN" },
    { "btpn_syar": "PT. BANK TABUNGAN PENSIUNAN NASIONAL SYARIAH" },
    { "bukopin": "PT BANK KB BUKOPIN TBK." },
    { "bukopin_syar": "PT. BANK SYARIAH BUKOPIN" },
    { "bumiputera": "PT. BANK BUMIPUTERA" },
    { "bumi_artha": "PT. BANK BUMI ARTA" },
    { "capital": "PT BANK CAPITAL INDONESIA" },
    { "centratama": "PT. CENTRATAMA NASIONAL BANK" },
    { "chase": "JP MORGAN CHASE BANK, N.A" },
    { "china": "BANK OF CHINA" },
    { "china_cons": "CHINA CONSTRUCTION" },
    { "chinatrust": "PT. BANK CTBC INDONESIA" },
    { "cimb": "PT. BANK CIMB NIAGA TBK." },
    { "cimb_syar": "PT. BANK CIMB NIAGA TBK. - UNIT USAHA SYARIAH" },
    { "cimb_rekening_ponsel": "PT. BANK CIMB NIAGA TBK. - REKENING PONSEL" },
    { "cimb_va": "PT. BANK CIMB NIAGA TBK. - VIRTUAL ACCOUNT" },
    { "citibank": "CITIBANK, NA" },
    { "commonwealth": "PT. BANK COMMONWEALTH" },
    { "danamon": "PT. BANK DANAMON INDONESIA TBK." },
    { "danamon_syar": "PT. BANK DANAMON INDONESIA UNIT USAHA SYARIAH" },
    { "dbs": "PT. BANK DBS INDONESIA" },
    { "deutsche": "DEUTSCHE BANK AG." },
    { "dipo": "PT. BANK DIPO INTERNATIONAL" },
    { "diy": "PT. BANK PEMBANGUNAN DAERAH DIY" },
    { "diy_syar": "PT.BANK PEMBANGUNAN DAERAH DIY UNIT USAHA SYARIAH" },
    { "dki": "PT. BANK DKI" },
    { "dki_syar": "PT. BANK DKI UNIT USAHA SYARIAH" },
    { "ekonomi": "PT. BANK EKONOMI RAHARJA" },
    { "fama": "PT. BANK FAMA INTERNATIONAL" },
    { "ganesha": "PT. BANK GANESHA" },
    { "gopay": "GO-PAY" },
    { "hana": "PT. BANK KEB HANA INDONESIA" },
    { "hs_1906": "PT. BANK HS 1906" },
    { "hsbc": "PT. BANK HSBC INDONESIA" },
    { "icbc": "PT. BANK ICBC INDONESIA" },
    { "ina_perdana": "PT. BANK INA PERDANA" },
    { "index_selindo": "BANK INDEX SELINDO" },
    { "india": "PT. BANK OF INDIA INDONESIA TBK." },
    { "jago": "PT. BANK JAGO TBK." },
    { "jago_syar": "PT. BANK JAGO UNIT USAHA SYARIAH" },
    { "jambi": "PT.BANK PEMBANGUNAN DAERAH JAMBI" },
    { "jasa_jakarta": "PT. BANK JASA JAKARTA" },
    { "jateng": "PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH" },
    { "jateng_syar": "PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH" },
    { "jatim": "PT. BANK PEMBANGUNAN DAERAH JATIM" },
    { "jatim_syar": "PT.BANK PEMBANGUNAN DAERAH JATIM - UNIT USAHA SYARIAH" },
    { "jtrust": "PT. BANK JTRUST INDONESIA TBK." },
    { "kalbar": "PT.BANK PEMBANGUNAN DAERAH KALBAR" },
    { "kalbar_syar": "PT.BANK PEMBANGUNAN DAERAH KALBAR UUS" },
    { "kalsel": "PT. BANK PEMBANGUNAN DAERAH KALSEL" },
    { "kalsel_syar": "PT. BANK PEMBANGUNAN DAERAH KALSEL - UNIT USAHA SYARIAH" },
    { "kalteng": "PT. BPD KALIMANTAN TENGAH" },
    { "kaltim": "PT.BANK PEMBANGUNAN DAERAH KALTIM" },
    { "kaltim_syar": "PT.BANK PEMBANGUNAN DAERAH KALTIM - UNIT USAHA SYARIAH" },
    { "lampung": "PT.BANK PEMBANGUNAN DAERAH LAMPUNG" },
    { "maluku": "PT.BANK PEMBANGUNAN DAERAH MALUKU" },
    { "mandiri": "PT. BANK MANDIRI (PERSERO) TBK." },
    { "mandiri_taspen": "PT. BANK MANDIRI TASPEN POS" },
    { "maspion": "PT. BANK MASPION" },
    { "mayapada": "PT. BANK MAYAPADA TBK." },
    { "maybank": "PT. BANK MAYBANK INDONESIA TBK." },
    { "maybank_syar": "PT. BANK MAYBANK SYARIAH INDONESIA" },
    { "maybank_uus": "PT. BANK MAYBANK INDONESIA TBK. UNIT USAHA SYARIAH" },
    { "mayora": "PT. BANK MAYORA" },
    { "mega_syar": "PT. BANK MEGA SYARIAH" },
    { "mega_tbk": "PT. BANK MEGA TBK." },
    { "mestika": "PT. BANK MESTIKA DHARMA" },
    { "metro": "PT. BANK METRO EXPRESS" },
    { "mitraniaga": "PT. BANK MITRANIAGA" },
    { "mitsubishi": "THE BANK OF TOKYO MITSUBISHI UFJ LTD." },
    { "mizuho": "PT. BANK MIZUHO INDONESIA" },
    { "mnc": "PT. BANK MNC INTERNASIONAL TBK." },
    { "muamalat": "PT. BANK MUAMALAT INDONESIA" },
    { "multiarta": "PT. BANK MULTI ARTA SENTOSA" },
    { "mutiara": "PT. BANK MUTIARA TBK." },
    { "niaga_syar": "PT. BANK NIAGA TBK. SYARIAH" },
    { "nagari": "PT. BANK NAGARI" },
    { "nobu": "PT. BANK NATIONALNOBU" },
    { "ntb": "PT. BANK PEMBANGUNAN DAERAH NTB" },
    { "ntt": "PT.BANK PEMBANGUNAN DAERAH NTT" },
    { "ocbc": "PT. BANK OCBC NISP TBK." },
    { "ocbc_syar": "PT. BANK OCBC NISP TBK. - UNIT USAHA SYARIAH" },
    { "ok": "PT. BANK OKE INDONESIA" },
    { "ovo": "OVO" },
    { "panin": "PT. PANIN BANK TBK." },
    { "panin_syar": "PT. BANK PANIN SYARIAH" },
    { "papua": "PT.BANK PEMBANGUNAN DAERAH PAPUA" },
    { "permata": "PT. BANK PERMATA TBK." },
    { "permata_syar": "PT. BANK PERMATA TBK. UNIT USAHA SYARIAH" },
    { "permata_va": "PT. BANK PERMATA TBK. - VIRTUAL ACCOUNT" },
    { "prima_master": "PT. PRIMA MASTER BANK" },
    { "pundi": "PT. BANK PUNDI INDONESIA" },
    { "purba": "PT. BANK PURBA DANARTA" },
    { "qnb": "PT. BANK QNB INDONESIA TBK." },
    { "rabobank": "PT. BANK RABOBANK INTERNATIONAL INDONESIA" },
    { "rbos": "THE ROYAL BANK OF SCOTLAND N.V." },
    { "resona": "PT. BANK RESONA PERDANIA" },
    { "riau": "PT. BANK PEMBANGUNAN DAERAH RIAU KEPRI" },
    { "riau_syar": "PT. BANK PEMBANGUNAN DAERAH RIAU KEPRI SYARIAH" },
    { "sampoerna": "PT. BANK SAHABAT SAMPOERNA" },
    { "sbi": "PT. BANK SBI INDONESIA" },
    { "seabank": "PT. BANK SEABANK INDONESIA" },
    { "shinhan": "PT. BANK SHINHAN INDONESIA" },
    { "sinarmas": "PT. BANK SINARMAS" },
    { "sinarmas_syar": "PT. BANK SINARMAS UNIT USAHA SYARIAH" },
    { "stanchard": "STANDARD CHARTERED BANK" },
    { "sulselbar": "PT. BANK SULSELBAR" },
    { "sulselbar_syar": "PT. BANK SULSELBAR UNIT USAHA SYARIAH" },
    { "sulteng": "PT. BPD SULAWESI TENGAH" },
    { "sultenggara": "PT. BPD SULAWESI TENGGARA" },
    { "sulut": "PT. BANK SULUTGO" },
    { "sumbar": "BPD SUMATERA BARAT" },
    { "sumitomo": "PT. BANK SUMITOMO MITSUI INDONESIA" },
    { "sumsel_babel": "PT. BPD SUMSEL DAN BABEL" },
    { "sumsel_babel_syar": "PT. BPD SUMSEL DAN BABEL UNIT USAHA SYARIAH" },
    { "sumut": "PT. BANK PEMBANGUNAN DAERAH SUMUT" },
    { "sumut_syar": "PT. BANK PEMBANGUNAN DAERAH SUMUT UUS" },
    { "uob": "PT. BANK UOB INDONESIA" },
    { "victoria": "PT. BANK VICTORIA INTERNATIONAL" },
    { "victoria_syar": "PT. BANK VICTORIA SYARIAH" },
    { "woori": "PT. BANK WOORI SAUDARA INDONESIA 1906 TBK." },
    { "yudha_bhakti": "PT. BANK YUDHA BHAKTI" }
];

export const _countryPhoneCodes = [
    { Afghanistan: "+93" },
    { Albania: "+355" },
    { Algeria: "+213" },
    { "American Samoa": "+1-684" },
    { Andorra: "+376" },
    { Angola: "+244" },
    { "Anguilla": "+1-264" },
    { Antarctica: "+672" },
    { "Antigua and Barbuda": "+1-268" },
    { Argentina: "+54" },
    { Armenia: "+374" },
    { Aruba: "+297" },
    { Australia: "+61" },
    { Austria: "+43" },
    { Azerbaijan: "+994" },
    { Bahamas: "+1-242" },
    { Bahrain: "+973" },
    { Bangladesh: "+880" },
    { Barbados: "+1-246" },
    { Belarus: "+375" },
    { Belgium: "+32" },
    { Belize: "+501" },
    { Benin: "+229" },
    { Bermuda: "+1-441" },
    { Bhutan: "+975" },
    { Bolivia: "+591" },
    { "Bosnia and Herzegovina": "+387" },
    { Botswana: "+267" },
    { Brazil: "+55" },
    { "British Indian Ocean Territory": "+246" },
    { "British Virgin Islands": "+1-284" },
    { Brunei: "+673" },
    { Bulgaria: "+359" },
    { "Burkina Faso": "+226" },
    { Burundi: "+257" },
    { Cambodia: "+855" },
    { Cameroon: "+237" },
    { Canada: "+1" },
    { "Cape Verde": "+238" },
    { "Cayman Islands": "+1-345" },
    { "Central African Republic": "+236" },
    { Chad: "+235" },
    { Chile: "+56" },
    { China: "+86" },
    { "Christmas Island": "+61" },
    { "Cocos Islands": "+61" },
    { Colombia: "+57" },
    { Comoros: "+269" },
    { "Cook Islands": "+682" },
    { "Costa Rica": "+506" },
    { Croatia: "+385" },
    { Cuba: "+53" },
    { Curacao: "+599" },
    { Cyprus: "+357" },
    { "Czech Republic": "+420" },
    { "Democratic Republic of the Congo": "+243" },
    { Denmark: "+45" },
    { Djibouti: "+253" },
    { Dominica: "+1-767" },
    { "Dominican Republic": "+1-809, +1-829, +1-849" },
    { "East Timor": "+670" },
    { Ecuador: "+593" },
    { Egypt: "+20" },
    { "El Salvador": "+503" },
    { "Equatorial Guinea": "+240" },
    { Eritrea: "+291" },
    { Estonia: "+372" },
    { Ethiopia: "+251" },
    { "Falkland Islands": "+500" },
    { "Faroe Islands": "+298" },
    { Fiji: "+679" },
    { Finland: "+358" },
    { France: "+33" },
    { "French Polynesia": "+689" },
    { Gabon: "+241" },
    { Gambia: "+220" },
    { Georgia: "+995" },
    { Germany: "+49" },
    { Ghana: "+233" },
    { Gibraltar: "+350" },
    { Greece: "+30" },
    { Greenland: "+299" },
    { Grenada: "+1-473" },
    { Guam: "+1-671" },
    { Guatemala: "+502" },
    { Guernsey: "+44-1481" },
    { Guinea: "+224" },
    { "Guinea-Bissau": "+245" },
    { Guyana: "+592" },
    { Haiti: "+509" },
    { Honduras: "+504" },
    { "Hong Kong": "+852" },
    { Hungary: "+36" },
    { Iceland: "+354" },
    { India: "+91" },
    { Indonesia: "+62" },
    { Iran: "+98" },
    { Iraq: "+964" },
    { Ireland: "+353" },
    { "Isle of Man": "+44-1624" },
    { Israel: "+972" },
    { Italy: "+39" },
    { "Ivory Coast": "+225" },
    { Jamaica: "+1-876" },
    { Japan: "+81" },
    { Jersey: "+44-1534" },
    { Jordan: "+962" },
    { Kazakhstan: "+7" },
    { Kenya: "+254" },
    { Kiribati: "+686" },
    { Kosovo: "+383" },
    { Kuwait: "+965" },
    { Kyrgyzstan: "+996" },
    { Laos: "+856" },
    { Latvia: "+371" },
    { Lebanon: "+961" },
    { Lesotho: "+266" },
    { Liberia: "+231" },
    { Libya: "+218" },
    { Liechtenstein: "+423" },
    { Lithuania: "+370" },
    { Luxembourg: "+352" },
    { Macau: "+853" },
    { Macedonia: "+389" },
    { Madagascar: "+261" },
    { Malawi: "+265" },
    { Malaysia: "+60" },
    { Maldives: "+960" },
    { Mali: "+223" },
    { Malta: "+356" },
    { "Marshall Islands": "+692" },
    { Mauritania: "+222" },
    { Mauritius: "+230" },
    { Mayotte: "+262" },
    { Mexico: "+52" },
    { Micronesia: "+691" },
    { Moldova: "+373" },
    { Monaco: "+377" },
    { Mongolia: "+976" },
    { Montenegro: "+382" },
    { Montserrat: "+1-664" },
    { Morocco: "+212" },
    { Mozambique: "+258" },
    { Myanmar: "+95" },
    { Namibia: "+264" },
    { Nauru: "+674" },
    { Nepal: "+977" },
    { Netherlands: "+31" },
    { "Netherlands Antilles": "+599" },
    { "New Caledonia": "+687" },
    { "New Zealand": "+64" },
    { Nicaragua: "+505" },
    { Niger: "+227" },
    { Nigeria: "+234" },
    { Niue: "+683" },
    { "Norfolk Island": "+672" },
    { "North Korea": "+850" },
    { "Northern Mariana Islands": "+1-670" },
    { Norway: "+47" },
    { Oman: "+968" },
    { Pakistan: "+92" },
    { Palau: "+680" },
    { Palestine: "+970" },
    { Panama: "+507" },
    { "Papua New Guinea": "+675" },
    { Paraguay: "+595" },
    { Peru: "+51" },
    { Philippines: "+63" },
    { Pitcairn: "+64" },
    { Poland: "+48" },
    { Portugal: "+351" },
    { "Puerto Rico": "+1-787, +1-939" },
    { Qatar: "+974" },
    { "Republic of the Congo": "+242" },
    { Reunion: "+262" },
    { Romania: "+40" },
    { Russia: "+7" },
    { Rwanda: "+250" },
    { "Saint Barthelemy": "+590" },
    { "Saint Helena": "+290" },
    { "Saint Kitts and Nevis": "+1-869" },
    { "Saint Lucia": "+1-758" },
    { "Saint Martin": "+590" },
    { "Saint Pierre and Miquelon": "+508" },
    { "Saint Vincent and the Grenadines": "+1-784" },
    { Samoa: "+685" },
    { "San Marino": "+378" },
    { "Sao Tome and Principe": "+239" },
    { "Saudi Arabia": "+966" },
    { Senegal: "+221" },
    { Serbia: "+381" },
    { Seychelles: "+248" },
    { "Sierra Leone": "+232" },
    { Singapore: "+65" },
    { "Sint Maarten": "+1-721" },
    { Slovakia: "+421" },
    { Slovenia: "+386" },
    { "Solomon Islands": "+677" },
    { Somalia: "+252" },
    { "South Africa": "+27" },
    { "South Korea": "+82" },
    { "South Sudan": "+211" },
    { Spain: "+34" },
    { "Sri Lanka": "+94" },
    { Sudan: "+249" },
    { Suriname: "+597" },
    { "Svalbard and Jan Mayen": "+47" },
    { Swaziland: "+268" },
    { Sweden: "+46" },
    { Switzerland: "+41" },
    { Syria: "+963" },
    { Taiwan: "+886" },
    { Tajikistan: "+992" },
    { Tanzania: "+255" },
    { Thailand: "+66" },
    { Togo: "+228" },
    { Tokelau: "+690" },
    { Tonga: "+676" },
    { "Trinidad and Tobago": "+1-868" },
    { Tunisia: "+216" },
    { Turkey: "+90" },
    { Turkmenistan: "+993" },
    { "Turks and Caicos Islands": "+1-649" },
    { Tuvalu: "+688" },
    { "U.S. Virgin Islands": "+1-340" },
    { Uganda: "+256" },
    { Ukraine: "+380" },
    { "United Arab Emirates": "+971" },
    { "United Kingdom": "+44" },
    { "United States": "+1" },
    { Uruguay: "+598" },
    { Uzbekistan: "+998" },
    { Vanuatu: "+678" },
    { Vatican: "+379" },
    { Venezuela: "+58" },
    { Vietnam: "+84" },
    { "Wallis and Futuna": "+681" },
    { "Western Sahara": "+212" },
    { Yemen: "+967" },
    { Zambia: "+260" },
    { Zimbabwe: "+263" }
];

