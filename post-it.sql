--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2024-12-05 13:11:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 218 (class 1259 OID 16426)
-- Name: Posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Posts" (
    id_post integer NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL,
    image text,
    id_user integer NOT NULL,
    id_theme integer NOT NULL,
    legend "char",
    "like" bigint
);


ALTER TABLE public."Posts" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16433)
-- Name: Themes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Themes" (
    id_theme integer NOT NULL,
    created_at date NOT NULL,
    name "char" NOT NULL
);


ALTER TABLE public."Themes" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16419)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id_user integer NOT NULL,
    created_at date NOT NULL,
    updated_at date NOT NULL,
    pseudo text NOT NULL,
    mdp "char" NOT NULL,
    icone text,
    biographie text NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 4856 (class 0 OID 16426)
-- Dependencies: 218
-- Data for Name: Posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Posts" (id_post, created_at, updated_at, image, id_user, id_theme, legend, "like") FROM stdin;
\.


--
-- TOC entry 4857 (class 0 OID 16433)
-- Dependencies: 219
-- Data for Name: Themes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Themes" (id_theme, created_at, name) FROM stdin;
\.


--
-- TOC entry 4855 (class 0 OID 16419)
-- Dependencies: 217
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id_user, created_at, updated_at, pseudo, mdp, icone, biographie) FROM stdin;
\.


--
-- TOC entry 4705 (class 2606 OID 16432)
-- Name: Posts Posts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT "Posts_pkey" PRIMARY KEY (id_post);


--
-- TOC entry 4707 (class 2606 OID 16437)
-- Name: Themes Themes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Themes"
    ADD CONSTRAINT "Themes_pkey" PRIMARY KEY (id_theme);


--
-- TOC entry 4703 (class 2606 OID 16425)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id_user);


--
-- TOC entry 4708 (class 2606 OID 16443)
-- Name: Posts fk_theme; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT fk_theme FOREIGN KEY (id_theme) REFERENCES public."Themes"(id_theme) NOT VALID;


--
-- TOC entry 4709 (class 2606 OID 16438)
-- Name: Posts fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Posts"
    ADD CONSTRAINT fk_user FOREIGN KEY (id_user) REFERENCES public."Users"(id_user) NOT VALID;


-- Completed on 2024-12-05 13:11:41

--
-- PostgreSQL database dump complete
--

