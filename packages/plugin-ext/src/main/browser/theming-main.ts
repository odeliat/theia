/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

 import { ThemeService } from '@theia/core/lib/browser/theming';
 import { ThemingServiceMain, ThemingServiceExt, MAIN_RPC_CONTEXT } from '../../common/plugin-api-rpc';
 import { RPCProtocol } from '../../common/rpc-protocol';
 import { interfaces } from 'inversify';

 export class ThemingMainImpl implements ThemingServiceMain {

    private proxy: ThemingServiceExt;
    private theming: ThemeService;

    constructor(rpc: RPCProtocol, container: interfaces.Container) {
        this.proxy = rpc.getProxy(MAIN_RPC_CONTEXT.THEMING_SERVICE_EXT);
        console.log(this.proxy);
        this.theming = container.get(ThemeService);
    }

    $activeColorTheme(): PromiseLike<string> {

        return Promise.resolve(this.theming.getCurrentTheme().id);
        // return Promise.resolve(result);
    }

 }
