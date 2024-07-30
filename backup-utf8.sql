--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: pokemon; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pokemon (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "pokedexNumber" integer NOT NULL,
    "imgName" character varying(255) NOT NULL,
    generation integer NOT NULL,
    "evolutionStage" integer NOT NULL,
    evolved boolean NOT NULL,
    "familyID" integer NOT NULL,
    "crossGen" boolean NOT NULL,
    type1 character varying(255) NOT NULL,
    type2 character varying(255),
    weather1 character varying(255) NOT NULL,
    weather2 character varying(255),
    "statTotal" integer NOT NULL,
    atk integer NOT NULL,
    def integer NOT NULL,
    sta integer NOT NULL,
    legendary boolean NOT NULL,
    aquireable boolean NOT NULL,
    spawns boolean NOT NULL,
    regional boolean NOT NULL,
    raidable boolean NOT NULL,
    hatchable boolean NOT NULL,
    shiny boolean NOT NULL,
    nest boolean NOT NULL,
    new boolean NOT NULL,
    "notGettable" boolean NOT NULL,
    "futureEvolve" boolean NOT NULL,
    cp40 integer NOT NULL,
    cp39 integer NOT NULL
);


ALTER TABLE public.pokemon OWNER TO postgres;

--
-- Name: pokemon_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pokemon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pokemon_id_seq OWNER TO postgres;

--
-- Name: pokemon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pokemon_id_seq OWNED BY public.pokemon.id;


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Name: pokemon id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon ALTER COLUMN id SET DEFAULT nextval('public.pokemon_id_seq'::regclass);


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, username, password, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: pokemon; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pokemon (id, name, "pokedexNumber", "imgName", generation, "evolutionStage", evolved, "familyID", "crossGen", type1, type2, weather1, weather2, "statTotal", atk, def, sta, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, new, "notGettable", "futureEvolve", cp40, cp39) FROM stdin;
1	Bulbasaur	1	1	1	1	f	1	f	grass	poison	Sunny/clear	Cloudy	326	118	118	90	f	t	t	f	f	f	f	t	f	f	f	981	967
2	Ivysaur	2	2	1	2	f	1	f	grass	poison	Sunny/clear	Cloudy	422	151	151	120	f	t	t	f	f	f	f	f	f	f	f	1552	1529
3	Venusaur	3	3	1	3	t	1	f	grass	poison	Sunny/clear	Cloudy	556	198	198	160	f	t	t	f	f	f	f	f	f	f	f	2568	2531
4	Charmander	4	4	1	1	f	2	f	fire	\N	Sunny/clear	\N	290	116	96	78	f	t	t	f	f	f	f	t	f	f	f	831	819
5	Charmeleon	5	5	1	2	f	2	f	fire	\N	Sunny/clear	\N	403	158	129	116	f	t	t	f	f	f	f	f	f	f	f	1484	1462
6	Charizard	6	6	1	3	t	2	f	fire	flying	Sunny/clear	Windy	555	223	176	156	f	t	t	f	f	f	f	f	f	f	f	2686	2648
7	Squirtle	7	7	1	1	f	3	f	water	\N	Rainy	\N	304	94	122	88	f	t	t	f	f	f	f	t	f	f	f	808	797
8	Wartortle	8	8	1	2	f	3	f	water	\N	Rainy	\N	399	126	155	118	f	t	t	f	f	f	f	f	f	f	f	1324	1305
9	Blastoise	9	9	1	3	t	3	f	water	\N	Rainy	\N	539	171	210	158	f	t	t	f	f	f	f	f	f	f	f	2291	2259
10	Caterpie	10	10	1	1	f	4	f	bug	\N	Rainy	\N	207	55	62	90	f	t	t	f	f	f	f	t	f	f	f	393	387
11	Metapod	11	11	1	2	f	4	f	bug	\N	Rainy	\N	239	45	94	100	f	t	t	f	f	f	f	f	f	f	f	419	413
12	Butterfree	12	12	1	3	f	4	f	bug	flying	Rainy	Windy	438	167	151	120	f	t	t	f	f	f	f	f	f	f	f	1701	1677
13	Weedle	13	13	1	1	f	5	f	bug	poison	Rainy	Cloudy	198	63	55	80	f	t	t	f	f	f	f	t	f	f	f	397	391
14	Kakuna	14	14	1	2	f	5	f	bug	poison	Rainy	Cloudy	222	46	86	90	f	t	t	f	f	f	f	f	f	f	f	392	386
15	Beedrill	15	15	1	3	f	5	f	bug	poison	Rainy	Cloudy	449	169	150	130	f	t	t	f	f	f	f	f	f	f	f	1777	1752
16	Pidgey	16	16	1	1	f	6	f	normal	flying	Partly cloudy	Windy	241	85	76	80	f	t	t	f	f	f	f	t	f	f	f	580	572
17	Pidgeotto	17	17	1	2	f	6	f	normal	flying	Partly cloudy	Windy	351	117	108	126	f	t	t	f	f	f	f	f	f	f	f	1085	1070
18	Pidgeot	18	18	1	3	f	6	f	normal	flying	Partly cloudy	Windy	489	166	157	166	f	t	t	f	f	f	f	f	f	f	f	1994	1966
19	Rattata	19	19	1	1	f	7	f	normal	\N	Partly cloudy	\N	233	103	70	60	f	t	t	f	f	f	f	t	f	f	f	588	580
20	Raticate	20	20	1	2	f	7	f	normal	\N	Partly cloudy	\N	415	161	144	110	f	t	t	f	f	f	f	f	f	f	f	1549	1527
21	Spearow	21	21	1	1	f	8	f	normal	flying	Partly cloudy	Windy	253	112	61	80	f	t	t	f	f	f	f	t	f	f	f	673	664
22	Fearow	22	22	1	2	t	8	f	normal	flying	Partly cloudy	Windy	447	182	135	130	f	t	t	f	f	f	f	f	f	f	f	1814	1788
23	Ekans	23	23	1	1	f	9	f	poison	\N	Cloudy	\N	282	110	102	70	f	t	t	f	f	f	f	t	f	f	f	778	767
24	Arbok	24	24	1	2	t	9	f	poison	\N	Cloudy	\N	445	167	158	120	f	t	t	f	f	f	f	f	f	f	f	1737	1712
25	Pikachu	25	25	1	1	f	10	f	electric	\N	Rainy	\N	283	112	101	70	f	t	t	f	f	f	t	t	f	f	f	787	776
26	Raichu	26	26	1	2	t	10	f	electric	\N	Rainy	\N	478	193	165	120	f	t	t	f	f	f	t	f	f	f	f	2025	1996
27	Sandshrew	27	27	1	1	f	11	f	ground	\N	Sunny/clear	\N	371	126	145	100	f	t	t	f	f	f	f	t	f	f	f	1194	1177
28	Sandslash	28	28	1	2	t	11	f	ground	\N	Sunny/clear	\N	534	182	202	150	f	t	t	f	f	f	f	f	f	f	f	2328	2294
29	Nidoran F	29	29	1	1	f	12	f	poison	\N	Cloudy	\N	290	86	94	110	f	t	t	f	f	f	f	f	f	f	f	736	725
30	Nidorina	30	30	1	2	f	12	f	poison	\N	Cloudy	\N	383	117	126	140	f	t	t	f	f	f	f	f	f	f	f	1218	1201
31	Nidoqueen	31	31	1	3	t	12	f	poison	ground	Cloudy	Sunny/clear	534	180	174	180	f	t	t	f	f	f	f	f	f	f	f	2338	2304
32	Nidoran M	32	32	1	1	f	13	f	poison	\N	Cloudy	\N	273	105	76	92	f	t	t	f	f	f	f	f	f	f	f	739	729
33	Nidorino	33	33	1	2	f	13	f	poison	\N	Cloudy	\N	371	137	112	122	f	t	t	f	f	f	f	f	f	f	f	1252	1234
34	Nidoking	34	34	1	3	t	13	f	poison	ground	Cloudy	Sunny/clear	523	204	157	162	f	t	t	f	f	f	f	f	f	f	f	2386	2352
35	Clefairy	35	35	1	1	f	14	f	fairy	\N	Cloudy	\N	363	107	116	140	f	t	t	f	f	f	f	t	f	f	f	1085	1070
36	Clefable	36	36	1	2	t	14	f	fairy	\N	Cloudy	\N	539	178	171	190	f	t	t	f	f	f	f	f	f	f	f	2353	2320
37	Vulpix	37	37	1	1	f	15	f	fire	\N	Sunny/clear	\N	294	96	122	76	f	t	t	f	f	f	f	t	f	f	f	774	763
38	Ninetales	38	38	1	2	t	15	f	fire	\N	Sunny/clear	\N	519	169	204	146	f	t	t	f	f	f	f	f	f	f	f	2157	2127
39	Jigglypuff	39	39	1	1	f	16	f	normal	fairy	Partly cloudy	Cloudy	354	80	44	230	f	t	t	f	f	f	f	t	f	f	f	713	703
40	Wigglytuff	40	40	1	2	t	16	f	normal	fairy	Partly cloudy	Cloudy	529	156	93	280	f	t	t	f	f	f	f	f	f	f	f	1906	1879
41	Zubat	41	41	1	1	f	17	f	poison	flying	Cloudy	Windy	239	83	76	80	f	t	t	f	f	f	f	t	f	f	f	569	560
42	Golbat	42	42	1	2	f	17	f	poison	flying	Cloudy	Windy	464	161	153	150	f	t	t	f	f	f	f	f	f	f	f	1830	1804
43	Oddish	43	43	1	1	f	18	f	grass	poison	Sunny/clear	Cloudy	337	131	116	90	f	t	t	f	f	f	f	t	f	f	f	1069	1054
44	Gloom	44	44	1	2	f	18	f	grass	poison	Sunny/clear	Cloudy	412	153	139	120	f	t	t	f	f	f	f	f	f	f	f	1512	1491
45	Vileplume	45	45	1	3	t	18	f	grass	poison	Sunny/clear	Cloudy	522	202	170	150	f	t	t	f	f	f	f	f	f	f	f	2367	2334
46	Paras	46	46	1	1	f	19	f	bug	grass	Rainy	Sunny/clear	290	121	99	70	f	t	t	f	f	f	f	t	f	f	f	836	824
47	Parasect	47	47	1	2	t	19	f	bug	grass	Rainy	Sunny/clear	431	165	146	120	f	t	t	f	f	f	f	f	f	f	f	1657	1633
48	Venonat	48	48	1	1	f	20	f	bug	poison	Rainy	Cloudy	322	100	102	120	f	t	t	f	f	f	f	t	f	f	f	902	889
49	Venomoth	49	49	1	2	t	20	f	bug	poison	Rainy	Cloudy	469	179	150	140	f	t	t	f	f	f	f	f	f	f	f	1937	1910
50	Diglett	50	50	1	1	f	21	f	ground	\N	Sunny/clear	\N	217	109	88	20	f	t	t	f	f	f	f	t	f	f	f	465	458
51	Dugtrio	51	51	1	2	t	21	f	ground	\N	Sunny/clear	\N	384	167	147	70	f	t	t	f	f	f	f	f	f	f	f	1333	1314
52	Meowth	52	52	1	1	f	23	f	normal	\N	Partly cloudy	\N	253	92	81	80	f	t	t	f	f	f	f	t	f	f	f	638	629
53	Persian	53	53	1	2	t	23	f	normal	\N	Partly cloudy	\N	419	150	139	130	f	t	t	f	f	f	f	f	f	f	f	1539	1517
54	Psyduck	54	54	1	1	f	24	f	water	\N	Rainy	\N	318	122	96	100	f	t	t	f	f	f	f	t	f	f	f	966	952
55	Golduck	55	55	1	2	t	24	f	water	\N	Rainy	\N	514	191	163	160	f	t	t	f	f	f	f	f	f	f	f	2270	2238
56	Mankey	56	56	1	1	f	25	f	fighting	\N	Cloudy	\N	315	148	87	80	f	t	t	f	f	f	f	t	f	f	f	1002	987
57	Primeape	57	57	1	2	t	25	f	fighting	\N	Cloudy	\N	481	207	144	130	f	t	t	f	f	f	f	f	f	f	f	2105	2075
58	Growlithe	58	58	1	1	f	26	f	fire	\N	Sunny/clear	\N	342	136	96	110	f	t	t	f	f	f	f	t	f	f	f	1110	1095
59	Arcanine	59	59	1	2	t	26	f	fire	\N	Sunny/clear	\N	573	227	166	180	f	t	t	f	f	f	f	f	f	f	f	2839	2799
60	Poliwag	60	60	1	1	f	27	f	water	\N	Rainy	\N	263	101	82	80	f	t	t	f	f	f	f	t	f	f	f	695	685
61	Poliwhirl	61	61	1	2	f	27	f	water	\N	Rainy	\N	390	130	130	130	f	t	t	f	f	f	f	f	f	f	f	1313	1294
62	Poliwrath	62	62	1	3	t	27	f	water	fighting	Rainy	Cloudy	549	182	187	180	f	t	t	f	f	f	f	f	f	f	f	2441	2407
63	Abra	63	63	1	1	f	28	f	psychic	\N	Windy	\N	348	195	103	50	f	t	t	f	f	f	f	t	f	f	f	1148	1132
64	Kadabra	64	64	1	2	f	28	f	psychic	\N	Windy	\N	450	232	138	80	f	t	t	f	f	f	f	f	f	f	f	1859	1833
65	Alakazam	65	65	1	3	t	28	f	psychic	\N	Windy	\N	575	271	194	110	f	t	t	f	f	f	f	f	f	f	f	2887	2845
66	Machop	66	66	1	1	f	29	f	fighting	\N	Cloudy	\N	365	137	88	140	f	t	t	f	f	f	f	t	f	f	f	1199	1182
67	Machoke	67	67	1	2	f	29	f	fighting	\N	Cloudy	\N	467	177	130	160	f	t	t	f	f	f	f	f	f	f	f	1910	1882
68	Machamp	68	68	1	3	t	29	f	fighting	\N	Cloudy	\N	576	234	162	180	f	t	t	f	f	f	f	f	f	f	f	2889	2848
69	Bellsprout	69	69	1	1	f	30	f	grass	poison	Sunny/clear	Cloudy	303	139	64	100	f	t	t	f	f	f	f	t	f	f	f	916	903
70	Weepinbell	70	70	1	2	f	30	f	grass	poison	Sunny/clear	Cloudy	397	172	95	130	f	t	t	f	f	f	f	f	f	f	f	1475	1453
71	Victreebel	71	71	1	3	t	30	f	grass	poison	Sunny/clear	Cloudy	505	207	138	160	f	t	t	f	f	f	f	f	f	f	f	2268	2236
72	Tentacool	72	72	1	1	f	31	f	water	poison	Rainy	Cloudy	359	97	182	80	f	t	t	f	f	f	f	t	f	f	f	956	943
73	Tentacruel	73	73	1	2	t	31	f	water	poison	Rainy	Cloudy	563	166	237	160	f	t	t	f	f	f	f	f	f	f	f	2374	2340
74	Geodude	74	74	1	1	f	32	f	rock	ground	Partly cloudy	Sunny/clear	375	132	163	80	f	t	t	f	f	f	f	t	f	f	f	1193	1176
75	Graveler	75	75	1	2	f	32	f	rock	ground	Partly cloudy	Sunny/clear	470	164	196	110	f	t	t	f	f	f	f	f	f	f	f	1815	1789
76	Golem	76	76	1	3	t	32	f	rock	ground	Partly cloudy	Sunny/clear	600	211	229	160	f	t	t	f	f	f	f	f	f	f	f	2916	2875
77	Ponyta	77	77	1	1	f	33	f	fire	\N	Sunny/clear	\N	402	170	132	100	f	t	t	f	f	f	f	t	f	f	f	1502	1480
78	Rapidash	78	78	1	2	t	33	f	fire	\N	Sunny/clear	\N	504	207	167	130	f	t	t	f	f	f	f	f	f	f	f	2252	2220
79	Slowpoke	79	79	1	1	f	34	f	water	psychic	Rainy	Windy	398	109	109	180	f	t	t	f	f	f	f	t	f	f	f	1204	1187
80	Slowbro	80	80	1	2	t	34	f	water	psychic	Rainy	Windy	561	177	194	190	f	t	t	f	f	f	f	f	f	f	f	2482	2446
81	Magnemite	81	81	1	1	f	35	f	electric	steel	Rainy	Snow	343	165	128	50	f	t	t	f	f	f	f	t	f	f	t	1083	1068
82	Magneton	82	82	1	2	t	35	f	electric	steel	Rainy	Snow	505	223	182	100	f	t	t	f	f	f	f	f	f	f	t	2237	2205
83	Farfetchd	83	83	1	1	f	36	f	normal	flying	Partly cloudy	Windy	346	124	118	104	f	t	t	t	f	f	f	f	f	f	f	1092	1076
84	Doduo	84	84	1	1	f	37	f	normal	flying	Partly cloudy	Windy	316	158	88	70	f	t	t	f	f	f	f	t	f	f	f	1011	996
85	Dodrio	85	85	1	2	t	37	f	normal	flying	Partly cloudy	Windy	483	218	145	120	f	t	t	f	f	f	f	f	f	f	f	2138	2108
86	Seel	86	86	1	1	f	38	f	water	\N	Rainy	\N	343	85	128	130	f	t	t	f	f	f	f	t	f	f	f	899	886
87	Dewgong	87	87	1	2	t	38	f	water	ice	Rainy	Snow	503	139	184	180	f	t	t	f	f	f	f	f	f	f	f	1894	1867
88	Grimer	88	88	1	1	f	39	f	poison	\N	Cloudy	\N	385	135	90	160	f	t	t	f	f	f	f	f	f	f	f	1269	1251
89	Muk	89	89	1	2	t	39	f	poison	\N	Cloudy	\N	584	190	184	210	f	t	t	f	f	f	f	f	f	f	f	2709	2670
90	Shellder	90	90	1	1	f	40	f	water	\N	Rainy	\N	344	116	168	60	f	t	t	f	f	f	f	t	f	f	f	958	944
91	Cloyster	91	91	1	2	t	40	f	water	ice	Rainy	Snow	609	186	323	100	f	t	t	f	f	f	f	f	f	f	f	2475	2439
92	Gastly	92	92	1	1	f	41	f	ghost	poison	Fog	Cloudy	316	186	70	60	f	t	t	f	f	f	f	t	f	f	f	1002	988
93	Haunter	93	93	1	2	f	41	f	ghost	poison	Fog	Cloudy	425	223	112	90	f	t	t	f	f	f	f	f	f	f	f	1716	1692
94	Gengar	94	94	1	3	t	41	f	ghost	poison	Fog	Cloudy	537	261	156	120	f	t	t	f	f	f	f	f	f	f	f	2619	2581
95	Onix	95	95	1	1	f	42	f	rock	ground	Partly cloudy	Sunny/clear	443	85	288	70	f	t	t	f	f	f	f	t	f	f	f	1002	988
96	Drowzee	96	96	1	1	f	43	f	psychic	\N	Windy	\N	367	89	158	120	f	t	t	f	f	f	f	t	f	f	f	992	978
97	Hypno	97	97	1	2	t	43	f	psychic	\N	Windy	\N	529	144	215	170	f	t	t	f	f	f	f	f	f	f	f	2048	2019
98	Krabby	98	98	1	1	f	44	f	water	\N	Rainy	\N	397	181	156	60	f	t	t	f	f	f	f	t	f	f	f	1386	1366
99	Kingler	99	99	1	2	t	44	f	water	\N	Rainy	\N	564	240	214	110	f	t	t	f	f	f	f	f	f	f	f	2694	2656
100	Voltorb	100	100	1	1	f	45	f	electric	\N	Rainy	\N	303	109	114	80	f	t	t	f	f	f	f	t	f	f	f	857	845
101	Electrode	101	101	1	2	t	45	f	electric	\N	Rainy	\N	472	173	179	120	f	t	t	f	f	f	f	f	f	f	f	1900	1873
102	Exeggcute	102	102	1	1	f	46	f	grass	psychic	Sunny/clear	Windy	367	107	140	120	f	t	t	f	f	f	f	t	f	f	f	1102	1086
103	Exeggutor	103	103	1	2	t	46	f	grass	psychic	Sunny/clear	Windy	581	233	158	190	f	t	t	f	f	f	f	f	f	f	f	2916	2875
104	Cubone	104	104	1	1	f	47	f	ground	\N	Sunny/clear	\N	355	90	165	100	f	t	t	f	f	f	f	t	f	f	f	943	930
105	Marowak	105	105	1	2	t	47	f	ground	\N	Sunny/clear	\N	464	144	200	120	f	t	t	f	f	f	f	f	f	f	f	1691	1667
106	Hitmonlee	106	106	1	1	t	48	f	fighting	\N	Cloudy	\N	535	224	211	100	f	t	t	f	f	f	f	f	f	f	f	2406	2372
107	Hitmonchan	107	107	1	1	t	48	f	fighting	\N	Cloudy	\N	505	193	212	100	f	t	t	f	f	f	f	f	f	f	f	2098	2069
108	Lickitung	108	108	1	1	t	49	t	normal	\N	Partly cloudy	\N	425	108	137	180	f	t	t	f	f	f	f	f	f	f	t	1322	1303
109	Koffing	109	109	1	1	f	50	f	poison	\N	Cloudy	\N	363	119	164	80	f	t	t	f	f	f	f	f	f	f	f	1091	1075
110	Weezing	110	110	1	2	t	50	f	poison	\N	Cloudy	\N	525	174	221	130	f	t	t	f	f	f	f	f	f	f	f	2183	2152
111	Rhyhorn	111	111	1	1	f	51	f	ground	rock	Sunny/clear	Partly cloudy	457	140	157	160	f	t	t	f	f	f	f	t	f	f	t	1679	1655
112	Rhydon	112	112	1	2	t	51	f	ground	rock	Sunny/clear	Partly cloudy	638	222	206	210	f	t	t	f	f	f	f	f	f	f	t	3300	3253
113	Chansey	113	113	1	1	f	52	t	normal	\N	Partly cloudy	\N	736	60	176	500	f	t	t	f	f	f	f	f	f	f	f	1469	1448
114	Tangela	114	114	1	1	t	53	f	grass	\N	Sunny/clear	\N	518	183	205	130	f	t	t	f	f	f	f	f	f	f	t	2208	2177
115	Kangaskhan	115	115	1	1	t	54	f	normal	\N	Partly cloudy	\N	556	181	165	210	f	t	t	t	f	f	f	f	f	f	f	2463	2428
116	Horsea	116	116	1	1	f	55	t	water	\N	Rainy	\N	314	129	125	60	f	t	t	f	f	f	f	t	f	f	f	921	908
117	Seadra	117	117	1	2	f	55	t	water	\N	Rainy	\N	479	187	182	110	f	t	t	f	f	f	f	f	f	f	f	1979	1951
118	Goldeen	118	118	1	1	f	56	f	water	\N	Rainy	\N	328	123	115	90	f	t	t	f	f	f	f	t	f	f	f	1006	992
119	Seaking	119	119	1	2	t	56	f	water	\N	Rainy	\N	489	175	154	160	f	t	t	f	f	f	f	f	f	f	f	2040	2011
120	Staryu	120	120	1	1	f	57	f	water	\N	Rainy	\N	309	137	112	60	f	t	t	f	f	f	f	t	f	f	f	926	913
121	Starmie	121	121	1	2	t	57	f	water	psychic	Rainy	Windy	514	210	184	120	f	t	t	f	f	f	f	f	f	f	f	2303	2270
122	Mr Mime	122	122	1	1	t	58	f	psychic	fairy	Windy	Cloudy	505	192	233	80	f	t	t	t	f	f	f	f	f	f	f	1984	1956
123	Scyther	123	123	1	1	f	59	f	bug	flying	Rainy	Windy	528	218	170	140	f	t	t	f	f	f	f	t	f	f	f	2464	2429
124	Jynx	124	124	1	1	t	60	f	ice	psychic	Snow	Windy	535	223	182	130	f	t	t	f	f	f	f	t	f	f	f	2512	2476
125	Electabuzz	125	125	1	1	t	61	t	electric	\N	Rainy	\N	501	198	173	130	f	t	t	f	f	f	f	t	f	f	t	2196	2165
126	Magmar	126	126	1	1	t	62	t	fire	\N	Sunny/clear	\N	505	206	169	130	f	t	t	f	f	f	f	t	f	f	t	2254	2222
127	Pinsir	127	127	1	1	t	63	f	bug	\N	Rainy	\N	565	238	197	130	f	t	t	f	f	f	f	t	f	f	f	2770	2730
128	Tauros	128	128	1	1	t	64	f	normal	\N	Partly cloudy	\N	545	198	197	150	f	t	t	t	f	f	f	f	f	f	f	2488	2452
129	Magikarp	129	129	1	1	f	65	f	water	\N	Rainy	\N	171	29	102	40	f	t	t	f	t	f	t	t	f	f	f	220	217
130	Gyarados	130	130	1	2	t	65	f	water	flying	Rainy	Windy	624	237	197	190	f	t	t	f	f	f	t	f	f	f	f	3281	3234
131	Lapras	131	131	1	1	f	66	f	water	ice	Rainy	Snow	605	165	180	260	f	t	t	f	f	f	f	f	f	f	f	2603	2566
132	Ditto	132	132	1	1	f	67	f	normal	\N	Partly cloudy	\N	278	91	91	96	f	t	t	f	f	f	f	f	f	f	f	718	707
133	Eevee	133	133	1	1	f	68	t	normal	\N	Partly cloudy	\N	335	104	121	110	f	t	t	f	f	f	f	t	f	f	t	969	955
134	Vaporeon	134	134	1	2	t	68	f	water	\N	Rainy	\N	642	205	177	260	f	t	t	f	f	f	f	f	f	f	f	3157	3112
135	Jolteon	135	135	1	2	t	68	f	electric	\N	Rainy	\N	563	232	201	130	f	t	t	f	f	f	f	f	f	f	f	2730	2691
136	Flareon	136	136	1	2	t	68	f	fire	\N	Sunny/clear	\N	580	246	204	130	f	t	t	f	f	f	f	f	f	f	f	2904	2863
137	Porygon	137	137	1	1	f	69	f	normal	\N	Partly cloudy	\N	422	153	139	130	f	t	t	f	f	f	f	f	f	f	t	1567	1545
138	Omanyte	138	138	1	1	f	70	f	rock	water	Partly cloudy	Rainy	399	155	174	70	f	t	t	f	f	f	f	t	f	f	f	1345	1326
139	Omastar	139	139	1	2	t	70	f	rock	water	Partly cloudy	Rainy	574	207	227	140	f	t	t	f	f	f	f	f	f	f	f	2685	2647
140	Kabuto	140	140	1	1	f	71	f	rock	water	Partly cloudy	Rainy	370	148	162	60	f	t	t	f	f	f	f	t	f	f	f	1172	1156
141	Kabutops	141	141	1	2	t	71	f	rock	water	Partly cloudy	Rainy	543	220	203	120	f	t	t	f	f	f	f	f	f	f	f	2517	2481
142	Aerodactyl	142	142	1	1	f	72	f	rock	flying	Partly cloudy	Windy	545	221	164	160	f	t	t	f	f	f	f	f	f	f	f	2608	2571
143	Snorlax	143	143	1	1	f	73	f	normal	\N	Partly cloudy	\N	700	190	190	320	f	t	t	f	f	f	f	f	f	f	f	3355	3307
144	Articuno	144	144	1	1	f	74	f	ice	flying	Snow	Windy	621	192	249	180	t	t	f	f	f	f	f	f	f	t	f	2933	2891
145	Zapdos	145	145	1	1	f	75	f	electric	flying	Rainy	Windy	621	253	188	180	t	t	f	f	f	f	f	f	f	t	f	3330	3282
146	Moltres	146	146	1	1	f	76	f	fire	flying	Sunny/clear	Windy	615	251	184	180	t	t	f	f	f	f	f	f	f	t	f	3272	3225
147	Dratini	147	147	1	1	f	77	f	dragon	\N	Windy	\N	295	119	94	82	f	t	t	f	f	f	f	f	f	f	f	860	848
148	Dragonair	148	148	1	2	t	77	f	dragon	\N	Windy	\N	423	163	138	122	f	t	t	f	f	f	f	f	f	f	f	1609	1586
149	Dragonite	149	149	1	3	t	77	f	dragon	flying	Windy	\N	646	263	201	182	f	t	t	f	f	f	f	f	f	f	f	3581	3530
150	Mewtwo	150	150	1	1	f	78	f	psychic	\N	Windy	\N	675	300	182	193	t	t	f	f	f	f	f	f	f	f	f	3982	3925
151	Mew	151	151	1	1	t	79	f	psychic	\N	Windy	\N	620	210	210	200	f	f	f	f	f	f	f	f	f	f	f	3090	3046
152	Chikorita	152	152	2	1	f	80	f	grass	\N	Sunny/clear	\N	304	92	122	90	f	t	t	f	f	f	f	t	f	f	f	801	790
153	Bayleef	153	153	2	2	f	80	f	grass	\N	Sunny/clear	\N	397	122	155	120	f	t	t	f	f	f	f	f	f	f	f	1296	1277
154	Meganium	154	154	2	3	t	80	f	grass	\N	Sunny/clear	\N	530	168	202	160	f	t	t	f	f	f	f	f	f	f	f	2227	2195
155	Cyndaquil	155	155	2	1	f	81	f	fire	\N	Sunny/clear	\N	290	116	96	78	f	t	t	f	f	f	f	t	f	f	f	831	819
156	Quilava	156	156	2	2	f	81	f	fire	\N	Sunny/clear	\N	403	158	129	116	f	t	t	f	f	f	f	f	f	f	f	1484	1462
157	Typhlosion	157	157	2	3	t	81	f	fire	\N	Sunny/clear	\N	555	223	176	156	f	t	t	f	f	f	f	f	f	f	f	2686	2648
158	Totodile	158	158	2	1	f	82	f	water	\N	Rainy	\N	333	117	116	100	f	t	t	f	f	f	f	t	f	f	f	1011	997
159	Croconaw	159	159	2	2	f	82	f	water	\N	Rainy	\N	431	150	151	130	f	t	t	f	f	f	f	f	f	f	f	1598	1576
160	Feraligatr	160	160	2	3	t	82	f	water	\N	Rainy	\N	572	205	197	170	f	t	t	f	f	f	f	f	f	f	f	2721	2682
161	Sentret	161	161	2	1	f	83	f	normal	\N	Partly cloudy	\N	226	79	77	70	f	t	t	f	f	f	f	t	f	f	f	519	511
162	Furret	162	162	2	2	t	83	f	normal	\N	Partly cloudy	\N	448	148	130	170	f	t	t	f	f	f	f	f	f	f	f	1667	1643
163	Hoothoot	163	163	2	1	f	84	f	normal	flying	Partly cloudy	Windy	288	67	101	120	f	t	t	f	f	f	f	t	f	f	f	640	631
164	Noctowl	164	164	2	2	t	84	f	normal	flying	Partly cloudy	Windy	524	145	179	200	f	t	t	f	f	f	f	f	f	f	f	2040	2011
165	Ledyba	165	165	2	1	f	85	f	bug	flying	Rainy	Windy	294	72	142	80	f	t	t	f	f	f	f	t	f	f	f	663	654
166	Ledian	166	166	2	2	t	85	f	bug	flying	Rainy	Windy	426	107	209	110	f	t	t	f	f	f	f	f	f	f	f	1275	1256
167	Spinarak	167	167	2	1	f	86	f	bug	poison	Rainy	Cloudy	258	105	73	80	f	t	t	f	f	f	f	t	f	f	f	685	675
168	Ariados	168	168	2	2	t	86	f	bug	poison	Rainy	Cloudy	429	161	128	140	f	t	t	f	f	f	f	f	f	f	f	1636	1613
169	Crobat	169	169	2	3	t	17	f	poison	flying	Cloudy	Windy	542	194	178	170	f	t	t	f	f	f	f	f	f	f	f	2466	2431
170	Chinchou	170	170	2	1	f	87	f	water	electric	Rainy	\N	362	106	106	150	f	t	t	f	f	f	f	t	f	f	f	1067	1052
171	Lanturn	171	171	2	2	t	87	f	water	electric	Rainy	\N	542	146	146	250	f	t	t	f	f	f	f	f	f	f	f	2077	2047
172	Pichu	172	172	2	0	f	10	f	electric	\N	Rainy	\N	180	77	63	40	f	t	f	f	f	f	t	f	f	f	f	376	370
173	Cleffa	173	173	2	0	f	14	f	fairy	\N	Cloudy	\N	266	75	91	100	f	t	f	f	f	f	f	f	f	f	f	620	611
174	Igglybuff	174	174	2	0	f	16	f	normal	fairy	Partly cloudy	Cloudy	283	69	34	180	f	t	f	f	f	f	f	f	f	f	f	512	505
175	Togepi	175	175	2	0	f	88	f	fairy	\N	Cloudy	\N	253	67	116	70	f	t	f	f	f	f	f	f	f	f	t	540	532
176	Togetic	176	176	2	1	t	88	f	fairy	flying	Cloudy	Windy	440	139	191	110	f	t	t	f	f	f	f	f	f	f	t	1543	1521
177	Natu	177	177	2	1	f	89	f	psychic	flying	Windy	\N	303	134	89	80	f	t	t	f	f	f	f	t	f	f	f	925	911
178	Xatu	178	178	2	2	t	89	f	psychic	flying	Windy	\N	468	192	146	130	f	t	t	f	f	f	f	f	f	f	f	1975	1947
179	Mareep	179	179	2	1	f	90	f	electric	\N	Rainy	\N	306	114	82	110	f	t	t	f	f	f	f	f	f	f	f	887	874
180	Flaaffy	180	180	2	2	f	90	f	electric	\N	Rainy	\N	397	145	112	140	f	t	t	f	f	f	f	f	f	f	f	1402	1382
181	Ampharos	181	181	2	3	t	90	f	electric	\N	Rainy	\N	563	211	172	180	f	t	t	f	f	f	f	f	f	f	f	2695	2656
182	Bellossom	182	182	2	3	t	18	f	grass	\N	Sunny/clear	\N	508	169	189	150	f	t	f	f	f	f	f	f	f	f	f	2108	2078
183	Marill	183	183	2	1	f	91	f	water	fairy	Rainy	Cloudy	270	37	93	140	f	t	t	f	f	f	f	t	f	f	f	420	414
184	Azumarill	184	184	2	2	t	91	f	water	fairy	Rainy	Cloudy	464	112	152	200	f	t	t	f	f	f	f	f	f	f	f	1503	1481
185	Sudowoodo	185	185	2	1	t	92	f	rock	\N	Partly cloudy	\N	505	167	198	140	f	t	t	f	f	f	f	f	f	f	f	2065	2035
186	Politoed	186	186	2	2	t	27	f	water	\N	Rainy	\N	546	174	192	180	f	t	t	f	f	f	f	f	f	f	f	2371	2337
187	Hoppip	187	187	2	1	f	93	f	grass	flying	Sunny/clear	Windy	238	67	101	70	f	t	t	f	f	f	f	t	f	f	f	508	501
188	Skiploom	188	188	2	2	f	93	f	grass	flying	Sunny/clear	Windy	328	91	127	110	f	t	t	f	f	f	f	f	f	f	f	882	869
189	Jumpluff	189	189	2	3	t	93	f	grass	flying	Sunny/clear	Windy	465	118	197	150	f	t	t	f	f	f	f	f	f	f	f	1553	1531
190	Aipom	190	190	2	1	t	94	f	normal	\N	Partly cloudy	\N	358	136	112	110	f	t	t	f	f	f	f	t	f	f	t	1188	1171
191	Sunkern	191	191	2	1	f	95	f	grass	\N	Sunny/clear	\N	170	55	55	60	f	t	t	f	f	f	f	t	f	f	f	316	312
192	Sunflora	192	192	2	2	t	95	f	grass	\N	Sunny/clear	\N	483	185	148	150	f	t	t	f	f	f	f	f	f	f	f	2048	2019
193	Yanma	193	193	2	1	t	96	f	bug	flying	Rainy	Windy	378	154	94	130	f	t	t	f	f	f	f	t	f	f	t	1326	1308
194	Wooper	194	194	2	1	f	97	f	water	ground	Rainy	Sunny/clear	260	75	75	110	f	t	t	f	f	f	f	t	f	f	f	596	587
195	Quagsire	195	195	2	2	t	97	f	water	ground	Rainy	Sunny/clear	494	152	152	190	f	t	t	f	f	f	f	f	f	f	f	1929	1902
196	Espeon	196	196	2	2	t	68	t	psychic	\N	Windy	\N	585	261	194	130	f	t	f	f	f	f	f	f	f	f	f	3000	2958
197	Umbreon	197	197	2	2	t	68	t	dark	\N	Fog	\N	566	126	250	190	f	t	f	f	f	f	f	f	f	f	f	2052	2023
198	Murkrow	198	198	2	1	t	98	f	dark	flying	Fog	Windy	382	175	87	120	f	t	t	f	f	f	f	t	f	f	t	1392	1372
199	Slowking	199	199	2	2	t	34	f	water	psychic	Rainy	Windy	561	177	194	190	f	t	t	f	f	f	f	f	f	f	f	2482	2446
200	Misdreavus	200	200	2	1	t	99	f	ghost	\N	Fog	\N	454	167	167	120	f	t	t	f	f	f	f	t	f	f	t	1781	1756
201	Unown	201	201	2	1	t	100	f	psychic	\N	Windy	\N	323	136	91	96	f	t	t	f	f	f	f	f	f	f	f	1022	1008
202	Wobbuffet	202	202	2	1	t	101	f	psychic	\N	Windy	\N	546	60	106	380	f	t	t	f	f	f	f	t	f	f	f	1024	1009
203	Girafarig	203	203	2	1	t	102	f	normal	psychic	Partly cloudy	Windy	455	182	133	140	f	t	t	f	f	f	f	t	f	f	f	1863	1836
204	Pineco	204	204	2	1	f	103	f	bug	\N	Rainy	\N	354	108	146	100	f	t	t	f	f	f	f	f	f	f	f	1045	1030
205	Forretress	205	205	2	2	t	103	f	bug	steel	Rainy	Snow	553	161	242	150	f	t	t	f	f	f	f	f	f	f	f	2263	2231
206	Dunsparce	206	206	2	1	t	104	f	normal	\N	Partly cloudy	\N	462	131	131	200	f	t	t	f	f	f	f	t	f	f	f	1615	1592
207	Gligar	207	207	2	1	t	105	f	ground	flying	Sunny/clear	Windy	477	143	204	130	f	t	t	f	f	f	f	f	f	f	t	1758	1733
208	Steelix	208	208	2	2	t	42	f	steel	ground	Snow	Sunny/clear	631	148	333	150	f	t	f	f	f	f	f	f	f	f	f	2439	2404
209	Snubbull	209	209	2	1	f	106	f	fairy	\N	Cloudy	\N	346	137	89	120	f	t	t	f	f	f	f	t	f	f	f	1124	1108
210	Granbull	210	210	2	2	t	106	f	fairy	\N	Cloudy	\N	529	212	137	180	f	t	t	f	f	f	f	f	f	f	f	2440	2406
211	Qwilfish	211	211	2	1	t	107	f	water	poison	Rainy	Cloudy	462	184	148	130	f	t	t	f	f	f	f	t	f	f	f	1910	1883
212	Scizor	212	212	2	2	t	59	f	bug	steel	Rainy	Snow	567	236	191	140	f	t	f	f	f	f	f	f	f	f	f	2801	2761
213	Shuckle	213	213	2	1	t	108	f	bug	rock	Rainy	Partly cloudy	453	17	396	40	f	t	t	f	f	f	f	t	f	f	f	300	296
214	Heracross	214	214	2	1	t	109	f	bug	fighting	Rainy	Cloudy	583	234	189	160	f	t	t	t	f	f	f	f	f	f	f	2938	2896
215	Sneasel	215	215	2	1	t	110	f	dark	ice	Fog	Snow	456	189	157	110	f	t	f	f	f	f	f	t	f	f	t	1868	1841
216	Teddiursa	216	216	2	1	f	111	f	normal	\N	Partly cloudy	\N	355	142	93	120	f	t	t	f	f	f	f	t	f	f	f	1184	1167
217	Ursaring	217	217	2	2	t	111	f	normal	\N	Partly cloudy	\N	560	236	144	180	f	t	t	f	f	f	f	f	f	f	f	2760	2720
218	Slugma	218	218	2	1	f	112	f	fire	\N	Sunny/clear	\N	269	118	71	80	f	t	t	f	f	f	f	t	f	f	f	750	740
219	Magcargo	219	219	2	2	t	112	f	fire	rock	Sunny/clear	Partly cloudy	448	139	209	100	f	t	t	f	f	f	f	f	f	f	f	1543	1521
220	Swinub	220	220	2	1	f	113	f	ice	ground	Snow	Sunny/clear	264	90	74	100	f	t	t	f	f	f	f	t	f	f	t	663	653
221	Piloswine	221	221	2	2	t	113	f	ice	ground	Snow	Sunny/clear	528	181	147	200	f	t	t	f	f	f	f	f	f	f	t	2284	2252
222	Corsola	222	222	2	1	t	114	f	water	rock	Rainy	Partly cloudy	384	118	156	110	f	t	t	t	f	f	f	f	f	f	f	1214	1197
223	Remoraid	223	223	2	1	f	115	f	water	\N	Rainy	\N	266	127	69	70	f	t	t	f	f	f	f	t	f	f	f	749	738
224	Octillery	224	224	2	2	t	115	f	water	\N	Rainy	\N	488	197	141	150	f	t	t	f	f	f	f	f	f	f	f	2124	2094
225	Delibird	225	225	2	1	t	116	f	ice	flying	Snow	Windy	308	128	90	90	f	t	t	f	f	f	f	f	f	f	f	937	924
226	Mantine	226	226	2	1	t	117	f	water	flying	Rainy	Windy	538	148	260	130	f	t	t	f	f	f	f	f	f	f	f	2032	2003
227	Skarmory	227	227	2	1	t	118	f	steel	flying	Snow	Windy	538	148	260	130	f	t	t	f	f	f	f	f	f	f	f	2032	2003
228	Houndour	228	228	2	1	f	119	f	dark	fire	Fog	Sunny/clear	335	152	93	90	f	t	t	f	f	f	f	t	f	f	f	1110	1094
229	Houndoom	229	229	2	2	t	119	f	dark	fire	Fog	Sunny/clear	533	224	159	150	f	t	t	f	f	f	f	f	f	f	f	2529	2493
230	Kingdra	230	230	2	3	t	55	t	water	dragon	Rainy	Windy	538	194	194	150	f	t	t	f	f	f	f	f	f	f	f	2424	2389
231	Phanpy	231	231	2	1	f	120	f	ground	\N	Sunny/clear	\N	394	107	107	180	f	t	t	f	f	f	f	f	f	f	f	1175	1158
232	Donphan	232	232	2	2	t	120	f	ground	\N	Sunny/clear	\N	608	214	214	180	f	t	t	f	f	f	f	f	f	f	f	3022	2979
233	Porygon2	233	233	2	2	t	69	f	normal	\N	Partly cloudy	\N	551	198	183	170	f	t	f	f	f	f	f	f	f	f	t	2546	2509
234	Stantler	234	234	2	1	t	121	f	normal	\N	Partly cloudy	\N	470	192	132	146	f	t	t	f	f	f	f	f	f	f	f	1988	1960
235	Smeargle	235	235	2	1	t	122	f	normal	\N	Partly cloudy	\N	238	40	88	110	f	f	f	f	f	f	f	f	f	f	f	389	384
236	Tyrogue	236	236	2	0	f	48	f	fighting	\N	Cloudy	\N	198	64	64	70	f	t	f	f	f	f	f	f	f	f	f	404	398
237	Hitmontop	237	237	2	1	t	48	f	fighting	\N	Cloudy	\N	487	173	214	100	f	t	t	f	f	f	f	f	f	f	f	1905	1878
238	Smoochum	238	238	2	0	f	0	f	ice	psychic	Snow	Windy	359	153	116	90	f	t	f	f	f	f	f	f	f	f	f	1230	1213
239	Elekid	239	239	2	0	f	0	f	electric	\N	Rainy	\N	335	135	110	90	f	t	f	f	f	f	f	f	f	f	f	1073	1057
240	Magby	240	240	2	0	f	0	f	fire	\N	Sunny/clear	\N	349	151	108	90	f	t	f	f	f	f	f	f	f	f	f	1178	1161
241	Miltank	241	241	2	1	t	123	f	normal	\N	Partly cloudy	\N	558	157	211	190	f	t	t	f	f	f	f	f	f	f	f	2312	2279
242	Blissey	242	242	2	2	t	0	t	normal	\N	Partly cloudy	\N	868	129	229	510	f	t	t	f	f	f	f	f	f	f	f	3219	3173
243	Raikou	243	243	2	1	t	124	f	electric	\N	Rainy	\N	631	241	210	180	t	t	f	f	f	f	f	f	f	t	f	3349	3301
244	Entei	244	244	2	1	t	125	f	fire	\N	Sunny/clear	\N	641	235	176	230	t	t	f	f	f	f	f	f	f	t	f	3377	3329
245	Suicune	245	245	2	1	t	126	f	water	\N	Rainy	\N	615	180	235	200	t	t	f	f	f	f	f	f	f	t	f	2823	2783
246	Larvitar	246	246	2	1	f	127	f	rock	ground	Partly cloudy	Sunny/clear	308	115	93	100	f	t	t	f	f	f	f	f	f	f	f	904	891
247	Pupitar	247	247	2	2	f	127	f	rock	ground	Partly cloudy	Sunny/clear	428	155	133	140	f	t	t	f	f	f	f	f	f	f	f	1608	1585
248	Tyranitar	248	248	2	3	t	127	f	rock	dark	Partly cloudy	Fog	663	251	212	200	f	t	t	f	f	f	f	f	f	f	f	3670	3617
249	Lugia	249	249	2	1	t	128	f	psychic	flying	Windy	\N	728	193	323	212	t	t	f	f	f	f	t	f	f	t	f	3598	3547
250	Ho Oh	250	250	2	1	t	129	f	fire	flying	Sunny/clear	Windy	706	239	274	193	t	t	f	f	f	f	f	f	f	t	f	3889	3833
251	Celebi	251	251	2	1	t	130	f	psychic	grass	Windy	Sunny/clear	620	210	210	200	f	f	f	f	f	f	f	f	f	f	f	3090	3046
252	Treecko	252	252	3	1	f	131	f	grass	\N	Sunny/clear	\N	308	124	104	80	f	t	t	f	f	f	f	t	f	f	f	923	909
253	Grovyle	253	253	3	2	f	131	f	grass	\N	Sunny/clear	\N	402	172	130	100	f	t	t	f	f	f	f	f	f	f	f	1508	1486
254	Sceptile	254	254	3	3	t	131	f	grass	\N	Sunny/clear	\N	543	223	180	140	f	t	f	f	f	f	f	f	f	f	f	2584	2547
255	Torchic	255	255	3	1	f	132	f	fire	\N	Sunny/clear	\N	312	130	92	90	f	t	t	f	f	f	f	t	f	f	f	959	946
256	Combusken	256	256	3	2	f	132	f	fire	fighting	Sunny/clear	Cloudy	398	163	115	120	f	t	t	f	f	f	f	f	f	f	f	1472	1451
257	Blaziken	257	257	3	3	t	132	f	fire	fighting	Sunny/clear	Cloudy	541	240	141	160	f	t	f	f	f	f	f	f	f	f	f	2631	2593
258	Mudkip	258	258	3	1	f	133	f	water	\N	Rainy	\N	319	126	93	100	f	t	t	f	f	f	f	t	f	f	f	981	967
259	Marshtomp	259	259	3	2	f	133	f	water	ground	Rainy	Sunny/clear	429	156	133	140	f	t	t	f	f	f	f	f	f	f	f	1617	1594
260	Swampert	260	260	3	3	t	133	f	water	ground	Rainy	Sunny/clear	583	208	175	200	f	t	f	f	f	f	f	f	f	f	f	2815	2774
261	Poochyena	261	261	3	1	f	134	f	dark	\N	Fog	\N	229	96	63	70	f	t	t	f	f	f	t	t	f	f	f	564	556
262	Mightyena	262	262	3	2	t	134	f	dark	\N	Fog	\N	448	171	137	140	f	t	t	f	f	f	t	f	f	f	f	1783	1757
263	Zigzagoon	263	263	3	1	f	135	f	normal	\N	Partly cloudy	\N	214	58	80	76	f	t	t	f	f	f	f	t	f	f	f	423	417
264	Linoone	264	264	3	2	t	135	f	normal	\N	Partly cloudy	\N	426	142	128	156	f	t	t	f	f	f	f	f	f	f	f	1533	1511
265	Wurmple	265	265	3	1	f	136	f	bug	\N	Rainy	\N	226	75	61	90	f	t	t	f	f	f	f	t	f	f	f	502	494
266	Silcoon	266	266	3	2	f	136	f	bug	\N	Rainy	\N	251	60	91	100	f	t	f	f	f	f	f	f	f	f	f	517	509
267	Beautifly	267	267	3	3	t	136	f	bug	flying	Rainy	Windy	407	189	98	120	f	t	f	f	f	f	f	f	f	f	f	1573	1551
268	Cascoon	268	268	3	2	f	137	f	bug	\N	Rainy	\N	251	60	91	100	f	t	f	f	f	f	f	f	f	f	f	517	509
269	Dustox	269	269	3	3	t	137	f	bug	poison	Rainy	Cloudy	390	98	172	120	f	t	f	f	f	f	f	f	f	f	f	1121	1105
270	Lotad	270	270	3	1	f	138	f	water	grass	Rainy	Sunny/clear	237	71	86	80	f	t	t	f	f	f	f	f	f	f	f	526	518
271	Lombre	271	271	3	2	f	138	f	water	grass	Rainy	Sunny/clear	360	112	128	120	f	t	t	f	f	f	f	f	f	f	f	1102	1086
272	Ludicolo	272	272	3	3	t	138	f	water	grass	Rainy	Sunny/clear	524	173	191	160	f	t	f	f	f	f	f	f	f	f	f	2229	2197
273	Seedot	273	273	3	1	f	139	f	grass	\N	Sunny/clear	\N	237	71	86	80	f	t	t	f	f	f	f	t	f	f	f	526	518
274	Nuzleaf	274	274	3	2	f	139	f	grass	dark	Sunny/clear	Fog	352	134	78	140	f	t	t	f	f	f	f	f	f	f	f	1117	1101
275	Shiftry	275	275	3	3	t	139	f	grass	dark	Sunny/clear	Fog	501	200	121	180	f	t	f	f	f	f	f	f	f	f	f	2186	2155
276	Taillow	276	276	3	1	f	140	f	normal	flying	Partly cloudy	Windy	247	106	61	80	f	f	t	f	f	f	f	t	t	f	f	642	632
277	Swellow	277	277	3	2	t	140	f	normal	flying	Partly cloudy	Windy	435	185	130	120	f	f	t	f	f	f	f	f	t	f	f	1747	1722
278	Wingull	278	278	3	1	f	141	f	water	flying	Rainy	Windy	247	106	61	80	f	f	t	f	f	f	f	t	t	f	f	642	632
279	Pelipper	279	279	3	2	t	141	f	water	flying	Rainy	Windy	484	175	189	120	f	f	t	f	f	f	f	f	t	f	f	1969	1941
280	Ralts	280	280	3	1	f	142	f	psychic	fairy	Windy	Cloudy	198	79	63	56	f	t	t	f	f	f	f	f	f	f	t	436	430
281	Kirlia	281	281	3	2	f	142	f	psychic	fairy	Windy	Cloudy	293	117	100	76	f	t	t	f	f	f	f	f	f	f	t	843	831
282	Gardevoir	282	282	3	3	t	142	f	psychic	fairy	Windy	Cloudy	593	237	220	136	f	t	f	f	f	f	f	f	f	f	f	2964	2922
283	Surskit	283	283	3	1	f	143	f	bug	water	Rainy	\N	270	93	97	80	f	f	t	f	f	f	f	t	t	f	f	695	685
284	Masquerain	284	284	3	2	f	143	f	bug	flying	Rainy	Windy	493	192	161	140	f	f	t	f	f	f	f	f	t	f	f	2135	2104
285	Shroomish	285	285	3	1	f	144	f	grass	\N	Sunny/clear	\N	304	74	110	120	f	t	t	f	f	f	f	t	f	f	f	722	711
286	Breloom	286	286	3	2	f	144	f	grass	fighting	Sunny/clear	Cloudy	514	241	153	120	f	t	t	f	f	f	f	f	f	f	f	2407	2373
287	Slakoth	287	287	3	1	f	145	f	normal	\N	Partly cloudy	\N	328	104	104	120	f	t	t	f	f	f	f	f	f	f	f	942	928
288	Vigoroth	288	288	3	2	f	145	f	normal	\N	Partly cloudy	\N	478	159	159	160	f	t	t	f	f	f	f	f	f	f	f	1896	1869
289	Slaking	289	289	3	3	f	145	f	normal	\N	Partly cloudy	\N	746	290	183	273	f	t	f	f	f	f	f	f	f	f	f	4548	4484
290	Nincada	290	290	3	1	f	146	f	bug	ground	Rainy	Sunny/clear	295	80	153	62	f	f	f	f	f	f	f	f	f	f	f	674	665
291	Ninjask	291	291	3	2	f	146	f	bug	flying	Rainy	Windy	437	199	116	122	f	f	f	f	f	f	f	f	f	f	f	1790	1765
292	Shedinja	292	292	3	3	f	146	f	bug	ghost	Rainy	Fog	235	153	80	2	f	f	f	f	f	f	f	f	f	f	f	421	415
293	Whismur	293	293	3	1	f	147	f	normal	\N	Partly cloudy	\N	262	92	42	128	f	f	t	f	f	f	f	t	f	f	f	603	594
294	Loudred	294	294	3	2	f	147	f	normal	\N	Partly cloudy	\N	383	134	81	168	f	f	t	f	f	f	f	f	f	f	f	1233	1215
295	Exploud	295	295	3	3	f	147	f	normal	\N	Partly cloudy	\N	529	179	142	208	f	f	f	f	f	f	f	f	f	f	f	2267	2234
296	Makuhita	296	296	3	1	f	148	f	fighting	\N	Cloudy	\N	297	99	54	144	f	t	t	f	f	f	f	t	f	f	f	745	735
297	Hariyama	297	297	3	2	f	148	f	fighting	\N	Cloudy	\N	611	209	114	288	f	t	t	f	f	f	f	f	f	f	f	2765	2726
298	Azurill	298	298	3	0	f	0	f	normal	fairy	Partly cloudy	Cloudy	207	36	71	100	f	t	f	f	f	f	f	f	f	f	f	316	312
299	Nosepass	299	299	3	1	f	149	f	rock	\N	Partly cloudy	\N	378	82	236	60	f	f	t	f	f	f	f	t	f	f	t	831	819
300	Skitty	300	300	3	1	f	150	f	normal	\N	Partly cloudy	\N	268	84	84	100	f	t	t	f	f	f	f	t	f	f	f	659	650
301	Delcatty	301	301	3	2	f	151	f	normal	\N	Partly cloudy	\N	404	132	132	140	f	t	t	f	f	f	f	f	f	f	f	1385	1366
302	Sableye	302	302	3	1	f	152	f	dark	ghost	Fog	\N	382	141	141	100	f	t	t	f	f	f	t	f	f	f	f	1305	1286
303	Mawile	303	303	3	1	f	153	f	steel	fairy	Snow	Cloudy	410	155	155	100	f	t	f	f	f	f	t	f	f	f	f	1484	1463
304	Aron	304	304	3	1	f	154	f	steel	rock	Snow	Partly cloudy	389	121	168	100	f	f	t	f	f	f	t	t	f	f	f	1232	1214
305	Lairon	305	305	3	2	f	154	f	steel	rock	Snow	Partly cloudy	518	158	240	120	f	f	t	f	f	f	t	f	f	f	f	2004	1976
306	Aggron	306	306	3	3	f	154	f	steel	rock	Snow	Partly cloudy	652	198	314	140	f	f	f	f	f	f	t	f	f	f	f	3004	2961
307	Meditite	307	307	3	1	f	155	f	fighting	psychic	Cloudy	Windy	245	78	107	60	f	t	t	f	f	f	f	t	f	f	f	555	547
308	Medicham	308	308	3	2	f	155	f	fighting	psychic	Cloudy	Windy	393	121	152	120	f	t	f	f	f	f	f	f	f	f	f	1275	1257
309	Electrike	309	309	3	1	f	156	f	electric	\N	Rainy	\N	281	123	78	80	f	t	t	f	f	f	f	t	f	f	f	810	798
310	Manectric	310	310	3	2	f	156	f	electric	\N	Rainy	\N	482	215	127	140	f	t	f	f	f	f	f	f	f	f	f	2131	2100
311	Plusle	311	311	3	1	f	157	f	electric	\N	Rainy	\N	434	167	147	120	f	t	t	f	f	f	f	f	f	f	f	1681	1657
312	Minun	312	312	3	1	f	158	f	electric	\N	Rainy	\N	434	147	167	120	f	t	t	f	f	f	f	f	f	f	f	1585	1563
313	Volbeat	313	313	3	1	f	159	f	bug	\N	Rainy	\N	444	143	171	130	f	f	t	t	f	f	f	f	t	f	f	1620	1597
314	Illumise	314	314	3	2	f	159	f	bug	\N	Rainy	\N	444	143	171	130	f	f	t	t	f	f	f	f	t	f	f	1620	1597
315	Roselia	315	315	3	1	f	160	f	grass	poison	Sunny/clear	Cloudy	434	186	148	100	f	t	t	f	f	f	f	f	f	f	t	1718	1694
316	Gulpin	316	316	3	1	f	161	f	poison	\N	Cloudy	\N	319	80	99	140	f	t	t	f	f	f	f	t	f	f	f	788	777
317	Swalot	317	317	3	2	f	161	f	poison	\N	Cloudy	\N	499	140	159	200	f	t	t	f	f	f	f	f	f	f	f	1872	1845
318	Carvanha	318	318	3	1	f	162	f	water	dark	Rainy	Fog	300	171	39	90	f	t	t	f	f	f	f	t	f	f	f	874	862
319	Sharpedo	319	319	3	1	f	163	f	water	dark	Rainy	Fog	466	243	83	140	f	t	t	f	f	f	f	f	f	f	f	1986	1957
320	Wailmer	320	320	3	1	f	164	f	water	\N	Rainy	\N	464	136	68	260	f	t	t	f	t	f	f	t	f	f	f	1424	1404
321	Wailord	321	321	3	2	f	164	f	water	\N	Rainy	\N	602	175	87	340	f	t	t	f	f	f	f	f	f	f	f	2258	2225
322	Numel	322	322	3	1	f	165	f	fire	ground	Sunny/clear	\N	321	119	82	120	f	f	t	f	f	f	f	t	f	f	f	957	944
323	Camerupt	323	323	3	2	t	165	f	fire	ground	Sunny/clear	\N	473	194	139	140	f	f	t	f	f	f	f	f	f	f	f	2016	1987
324	Torkoal	324	324	3	1	f	166	f	fire	\N	Sunny/clear	\N	525	151	234	140	f	f	t	t	f	f	f	f	f	f	f	2036	2007
325	Spoink	325	325	3	1	f	167	f	psychic	\N	Windy	\N	390	125	145	120	f	t	t	f	f	f	f	t	f	f	f	1285	1266
326	Grumpig	326	326	3	2	t	167	f	psychic	\N	Windy	\N	542	171	211	160	f	t	t	f	f	f	f	f	f	f	f	2310	2277
327	Spinda	327	327	3	1	f	168	f	normal	\N	Partly cloudy	\N	352	116	116	120	f	f	f	f	f	f	f	f	f	f	f	1088	1072
328	Trapinch	328	328	3	1	f	169	f	ground	\N	Sunny/clear	\N	330	162	78	90	f	f	t	f	f	f	f	f	f	f	f	1092	1076
329	Vibrava	329	329	3	2	f	169	f	ground	dragon	Sunny/clear	Windy	333	134	99	100	f	f	t	f	f	f	f	f	f	f	f	1065	1050
330	Flygon	330	330	3	3	t	169	f	ground	dragon	Sunny/clear	Windy	533	205	168	160	f	f	f	f	f	f	f	f	f	f	f	2458	2423
\.


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, false);


--
-- Name: pokemon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pokemon_id_seq', 330, true);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_username_key" UNIQUE (username);


--
-- Name: pokemon pokemon_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT pokemon_pkey PRIMARY KEY (id);


--
-- Name: pokemon pokemon_pokedexNumber_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pokemon
    ADD CONSTRAINT "pokemon_pokedexNumber_key" UNIQUE ("pokedexNumber");


--
-- PostgreSQL database dump complete
--

