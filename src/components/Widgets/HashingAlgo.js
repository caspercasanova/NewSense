import React, {useState} from 'react';
import {animated, useTransition, useTrail} from 'react-spring';

// TODO different types
// TODO Inline
// TODO Large
// https://github.com/cettoana/react-scramble
const actions = ['loading', 'connecting', 'launching', 'streaming', 'encrypting', 'syncing', 'mutating', 'hashing', 'injecting', 'calibrating', 'integrating'];
const subActions = ['calibrating a_e_s_t_h_e_t_i_c_s'];

const operationNames = ['alhazred', 'krakatoa', 'khaos', 'kronos', 'hypnos', 'nyx', 'noctus', 'c_thulhu', 'azoth', 'erebu5', 'memnon', 'lazarus', 'amun_ra_set', 'astarte',];
const projects = [];
const folders = ['new_sense', 'onyx_womb', 'lost_dream', 'slept_city', 'sunken_temple', 'xero_chill', 'echo_shift', 'blue_shift', 'red_shift', 'lost_coast', 'pink_noize', 'sandstone', 'sonic_doom'];

const files = [
  'brain', 'dream', 'vapour', 'ghost',
  'keep_dreamin', 'nitro', 'pylon_7B',
  'wnnaCry', 'pipe_dream', 'hydra',
  'wolves_blood', 'Algol', 'demons_head',
  'xenon', 'nameless', 'widow', 'crypt_maker',
  'phantom', 'xer0', 'N.E.C.R.O.',
  'ALL_BE_DEMANDED', 'all_star',
  '1uxxx0r', 'xen27', 'nyke_apteron', 'predator',
  'NSA', 'sierra_wave', '♣_Tropical',
];

const users = ['Euclid', 'Manly P. Hall', 'Lord Soloman', 'G. Freeman', 'Persephone'];
const fileFormats = ['.exe', '.wav'];

const suffixes = [' v.01.313.10', ' v.013', '__PROTOCALS__', '__INTIATIVE__', '__core__', '__domain__'];

const coolWords = ['xenon', 'nameless', 'widow', 'crypt', 'phantom', 'banshee', 'xen', 'xero', 'dust'];
const colors = ['onyx', 'pink', 'emerald', 'YInMn'];
const symbols = ['Δ', 'Σ', 'Ψ', 'Ω', 'Φ', 'λ', 'Λ', 'ψ', 'π', 'Π', '!', '¿', '¡', '@', '#', '$', '%', '*', '♠'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letters = ['n', 'w', 's', 'e', 'n', 's', 'a', 'c', 't', 'i', 'v', 'x', 'y', 'z'];


const HashingAlgo = () => {

  const transitions = useTransition([], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });

  return (
    <>

    </>
  );
};

export default HashingAlgo;
