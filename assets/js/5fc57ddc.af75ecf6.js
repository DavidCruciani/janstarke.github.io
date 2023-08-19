"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[8160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,u=p["".concat(c,".").concat(y)]||p[y]||b[y]||o;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={layout:"post",title:"Using Pairing-based cryptography in Java",date:"2021-02-5",categories:"java crypto",author:"jasa"},i=void 0,s={permalink:"/blog/2021/02/05/Using_pairing_based_cryptography_in_Java",source:"@site/blog/2021-02-05-Using_pairing_based_cryptography_in_Java.md",title:"Using Pairing-based cryptography in Java",description:"Since some years I'm working on this topic, and guess what-)",date:"2021-02-05T00:00:00.000Z",formattedDate:"February 5, 2021",tags:[],readingTime:3.855,hasTruncateMarker:!1,authors:[{name:"jasa"}],frontMatter:{layout:"post",title:"Using Pairing-based cryptography in Java",date:"2021-02-5",categories:"java crypto",author:"jasa"},prevItem:{title:"Pairing based cryptography in Rust",permalink:"/blog/2021/02/13/Pairing_based_cryptography_in_Rust"},nextItem:{title:"Some emotet variants use bad crypto (in the first stage)",permalink:"/blog/2021/01/25/some-emotet-variants-use-bad-crypto-in-the-first-stage"}},c={authorsImageUrls:[void 0]},d=[{value:"Example of a public key in machine independent format",id:"example-of-a-public-key-in-machine-independent-format",level:2}],l={toc:d},p="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Since some years I'm working on this topic, and guess what: It is working now :-)"),(0,r.kt)("h1",{id:"what-should-i-need-pairing-based-cryptography-for"},"What should I need Pairing-based cryptography for?"),(0,r.kt)("p",null,"Imagine the following: You are in a hospital and get some test results (e.g. from a Covid-19 test). You want to protect the result by encrypting it, but you are not sure who needs to be able to read that result later. But you don't want to decrypt and reencrypt the result later. This is, where PBC comes in play. You can do as 2nd-level encryption, which protects the data from being read by any person. To decrypt 2nd-level encrypted data, you must first convert that to 1st-level-encrypted data, which requires the public key of the person you want to grant access to you data, and your own private key. After this step, the person for who you created the 1st-level encrypted data can decrypt the data using its own private key."),(0,r.kt)("p",null,"This enables the following use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Storage of confidential data in a cloud which you don't trust, while giving partners access to your data. This works as long as the cloud provider doesn't know any private keys. It even allows the cloud provider to do the transformation from 2nd-level to 1st-level, if you calculate the reencryption-key on-premise."),(0,r.kt)("li",{parentName:"ul"},"Revocation of data access by revoking the reencryption key.")),(0,r.kt)("h1",{id:"what-happened-until-now"},"What happened until now?"),(0,r.kt)("p",null,"My starting point is the ",(0,r.kt)("strong",{parentName:"p"},"PBC Library")," ",(0,r.kt)("a",{parentName:"p",href:"https://crypto.stanford.edu/pbc/"},"https://crypto.stanford.edu/pbc/")," which was written by Ben Lynn as part of his PhD thesis. To use this in a prototyping project, we had to transmit encrypted content and key material from one computer to another. So we needed a machine-independant representation of all of the data, which was not subject of ",(0,r.kt)("strong",{parentName:"p"},"PBC Library"),". So, we wrapped all the data structures used in ",(0,r.kt)("strong",{parentName:"p"},"PBC Library")," by C++-based structures. After this, it was possible to easily export and import cryptographic data using"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"any data format, such as JSON, ASN.1, XML, ..."),(0,r.kt)("li",{parentName:"ul"},"any other PBC library (lower case L).")),(0,r.kt)("p",null,"Our next challenge was to make the C++ library accessible for higher level languages, such as Java (required for Android devices as well as Java Backends) or Swift (required for iOS devices). As of today, we succeeded. The following is running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.company;\nimport com.tsystems_mms.je2ee.*;\n\npublic class Main {\n\n    static {\n        System.loadLibrary("je2ee");\n    }\n\n    private static final char[] HEX_ARRAY = "0123456789ABCDEF".toCharArray();\n    public static String bytesToHex(byte[] bytes) {\n        char[] hexChars = new char[bytes.length * 2];\n        for (int j = 0; j < bytes.length; j++) {\n            int v = bytes[j] & 0xFF;\n            hexChars[j * 2] = HEX_ARRAY[v >>> 4];\n            hexChars[j * 2 + 1] = HEX_ARRAY[v & 0x0F];\n        }\n        return new String(hexChars);\n    }\n\n    public static void main(String[] args) {\n        PbcContext context = je2ee.createContext();\n        GlobalParameters global = je2ee.getGlobal(context);\n\n        KeyPair kp = je2ee.createKeyPair(global);\n        Element dek = je2ee.generateDataEncryptionKey(global);\n\n        byte[] aesKey1 = je2ee.kdf256(dek);\n        Tuple ciphertext = je2ee.encryptFirstLevel(je2ee.publicKey(kp), dek);\n        Element decryptedDek = je2ee\n            .decryptFirstLevel(je2ee.secretKey(kp), ciphertext);\n\n        byte[] aesKey2 = je2ee.kdf256(decryptedDek);\n\n        String aes1 = bytesToHex(aesKey1);\n        String aes2 = bytesToHex(aesKey2);\n\n        assert aes1.equals(aes2);\n        System.out.println(aes2);\n    }\n}\n')),(0,r.kt)("h1",{id:"where-can-i-get-the-code"},"Where can I get the code?"),(0,r.kt)("p",null,"You need to recursively clone the following repo: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/T-Systems-MMS/libe2ee"},"https://github.com/T-Systems-MMS/libe2ee")),(0,r.kt)("h1",{id:"can-i-use-this-for-my-project"},"Can I use this for my project?"),(0,r.kt)("p",null,"Yes, you can, but ",(0,r.kt)("strong",{parentName:"p"},"YOU SHOULDN'T"),"! This project is a prototype and is only made to show what's possible. Neither ",(0,r.kt)("strong",{parentName:"p"},"PBC Library")," nor this very project has been checked thoroughly by cryptography experts. I do not give any guarantee that this code is secure against any attacks. Maybe if someone is willing to pay for it, it may be possible to raise this code to production level. Until then, this is only a freetime project of myself."),(0,r.kt)("h1",{id:"some-insights"},"Some insights..."),(0,r.kt)("h2",{id:"example-of-a-public-key-in-machine-independent-format"},"Example of a public key in machine independent format"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "root": {\n        "id": "a990af45-2269-537b-95c0-2d1815c6bddb",\n        "type": "element"\n    },\n    "a990af45-2269-537b-95c0-2d1815c6bddb": {\n        "type": "element",\n        "id": "a990af45-2269-537b-95c0-2d1815c6bddb",\n        "field": "3709e538-b580-5e21-a2ae-333585123e35",\n        "y": "d5TgGd3TwTiVhhdZpQ6L0BS5YqdzIxQVK4ZTPANMqNVvCo1qdeKSz2HZnPKqM9mazGKGZcwG9toinepFSmMvcf",\n        "x": "AiblhfGZ24J3IA1MNyfKaV3HGMHyCIngbR2sU9D5QyZc5IJV8yxXUGQpbiGBQ3I8N8DXgHQ1dSOKYilloO5BOq"\n    },\n    "3709e538-b580-5e21-a2ae-333585123e35": {\n        "type": "field",\n        "subtype": "curve",\n        "id": "3709e538-b580-5e21-a2ae-333585123e35",\n        "order": "aWgEPTl1tmebfs3ZETd8TJLcWlT",\n        "pairing": "86ec11e5-802e-5ea0-9cc6-5a429f653359",\n        "a": "a4cb7d3e-d31e-5472-9928-0b17725c9ae4",\n        "b": "a47e3ca0-d570-5fe4-bd87-245b0100dbc2",\n        "cofac": "1iRiNwETOuqBD7ugR7bRatbQL7JDKXfb6QfKFlQdbxb46gQKAjLCS397ZbnU"\n    },\n    "86ec11e5-802e-5ea0-9cc6-5a429f653359": {\n        "type": "pairing",\n        "id": "86ec11e5-802e-5ea0-9cc6-5a429f653359",\n        "G1": "3709e538-b580-5e21-a2ae-333585123e35",\n        "G2": "3709e538-b580-5e21-a2ae-333585123e35",\n        "GT": "6e9b64ba-e391-5c46-a9b9-0527b3c22212",\n        "Zr": "a6d00cef-ce1b-5410-bd45-41a0058b4540",\n        "Eq": "3709e538-b580-5e21-a2ae-333585123e35",\n        "Fq": "49f4d9d3-3110-5d68-a069-d035ef71b54b",\n        "Fq2": "df25d091-9992-5b89-9ab7-487678fbd9d3",\n        "r": "aWgEPTl1tmebfs3ZETd8TJLcWlT",\n        "phikonr": "1iRiNwETOuqBD7ugR7bRatbQL7JDKXfb6QfKFlQdbxb46gQKAjLCS397ZbnU"\n    },\n    "6e9b64ba-e391-5c46-a9b9-0527b3c22212": {\n        "type": "field",\n        "subtype": "mulg",\n        "id": "6e9b64ba-e391-5c46-a9b9-0527b3c22212",\n        "order": "aWgEPTl1tmebfs3ZETd8TJLcWlT",\n        "pairing": "86ec11e5-802e-5ea0-9cc6-5a429f653359",\n        "base": "df25d091-9992-5b89-9ab7-487678fbd9d3"\n    },\n    "df25d091-9992-5b89-9ab7-487678fbd9d3": {\n        "type": "field",\n        "subtype": "fi",\n        "id": "df25d091-9992-5b89-9ab7-487678fbd9d3",\n        "order": "11QugYb4N8ouqquotyF8IDXtacHwMTbO0nzw4DSKv860wA8OmQwaM5NwQDuGzdsaq7qNH2vjKAZYuuiiAkgzugeZZJGzPCyBalRcL5Un43QnC77oOh4PwFfDudE7kPVfi9kMYY9ETj6JjicbhyWKqsrYaU4WMTQfwjMsA1IwD08m1",\n        "pairing": "86ec11e5-802e-5ea0-9cc6-5a429f653359",\n        "base": "49f4d9d3-3110-5d68-a069-d035ef71b54b"\n    },\n    "49f4d9d3-3110-5d68-a069-d035ef71b54b": {\n        "type": "field",\n        "subtype": "montfp",\n        "id": "49f4d9d3-3110-5d68-a069-d035ef71b54b",\n        "order": "10iCaKEy0HbDHT6PP7xruLvQ6exXF4OXOWMsLG1cWzUGqHPKb3iHXFPHp5i6InsKwpSoCRA0udlrariW7VXEft1",\n        "modulus": "10iCaKEy0HbDHT6PP7xruLvQ6exXF4OXOWMsLG1cWzUGqHPKb3iHXFPHp5i6InsKwpSoCRA0udlrariW7VXEft1",\n        "negpinv": "KdbJ0wZgOLZ",\n        "R": "Y3IcJ7iNkOkQg5TzeRWCJ5hLYyIjT6hZsVtkHTRaFzT7sr2lxvr37CT7VuW77EbDxq0kazOYLhOdzC31vZhUzz",\n        "R3": "ebReJS6QeiIxqNFKFf4H01oKlyOviNcOAYf0Ksc4DVIJ8Uk1AxsCiwdUCbzMFFEwkBwtsN5OHZ7ThgIxHNwAq8"\n    },\n    "a6d00cef-ce1b-5410-bd45-41a0058b4540": {\n        "type": "field",\n        "subtype": "montfp",\n        "id": "a6d00cef-ce1b-5410-bd45-41a0058b4540",\n        "order": "aWgEPTl1tmebfs3ZETd8TJLcWlT",\n        "modulus": "aWgEPTl1tmebfs3ZETd8TJLcWlT",\n        "negpinv": "1",\n        "R": "01lnGH9GscRlVEuYE2YC",\n        "R3": "2HXdeLEYzbwUJfGOVzp6EZRig0e"\n    },\n    "a4cb7d3e-d31e-5472-9928-0b17725c9ae4": {\n        "type": "element",\n        "id": "a4cb7d3e-d31e-5472-9928-0b17725c9ae4",\n        "field": "49f4d9d3-3110-5d68-a069-d035ef71b54b",\n        "x": "1"\n    },\n    "a47e3ca0-d570-5fe4-bd87-245b0100dbc2": {\n        "type": "element",\n        "id": "a47e3ca0-d570-5fe4-bd87-245b0100dbc2",\n        "field": "49f4d9d3-3110-5d68-a069-d035ef71b54b",\n        "x": "0"\n    }\n}\n')))}b.isMDXComponent=!0}}]);